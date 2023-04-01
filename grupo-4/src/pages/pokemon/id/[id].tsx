import { NextPage } from 'next';
import { GetStaticPaths } from 'next';
import { GetStaticProps } from 'next';
import { PokemonPrincipalCard } from '../../../components/pokemon';
import { Pokemon } from '../../../interfaces';
import {   getStaticInformation } from '../../../utils';

interface PokemonProps {
  pokemon: Pokemon; 
}
const PokemonPage: NextPage<PokemonProps> = ({ pokemon }) => {
  return <PokemonPrincipalCard pokemon={pokemon} />;
};
export const getStaticPaths: GetStaticPaths = async (_ctx) => {
  const pokemons151 = [...Array(151)].map((_value, index) => {
    return { params: { id: `${index + 1}` } };
  });
  return {
    paths: pokemons151,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id: pokemonTermSearch } = params as { id: string };

  return await getStaticInformation(pokemonTermSearch);
};

export default PokemonPage;
