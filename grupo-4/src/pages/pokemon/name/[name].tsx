import { NextPage } from 'next';
import { GetStaticPaths } from 'next';
import { GetStaticProps } from 'next';
import { pokeApi } from '../../../api';  
import { PokemonPrincipalCard } from '../../../components/pokemon';
import { Pokemon } from '../../../interfaces';
import { PokemonListResponse } from '../../../interfaces/pokemon-list';
import { getStaticInformation } from '../../../utils/getStaticInformation';

interface PokemonProps {
  pokemon: Pokemon; 
}
const PokemonByNamePage: NextPage<PokemonProps> = ({ pokemon }) => {
  return   <PokemonPrincipalCard pokemon={pokemon} />
};

export const getStaticPaths: GetStaticPaths = async (_ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
 
  const pokemons151 = data.results.map(({name}) => {
    return { params: { name  } };
  });
  return {
    paths: pokemons151,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name: pokemonTermSearch } = params as { name: string; }; 
  
  return await getStaticInformation(pokemonTermSearch);
   
};

export default PokemonByNamePage;
