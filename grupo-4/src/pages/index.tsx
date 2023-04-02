import { NextPage } from 'next';
import { Grid } from '@nextui-org/react';
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next';
import { SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';
import { useEffect, useState } from 'react';
import pokeApi from '../utils/localFavorites';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  const [newPokemons, setNewPokemons] = useState<any>([]);
  let isLoaded = false;
  useEffect((): void => {
    (async () => {
      if (!isLoaded) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        isLoaded = true;
        setNewPokemons(await pokeApi.getNewPokemonsSearched());
      }
    })();
  }, []);

  return (
    <>
      <Layout title="Listado de Pokémons">
        <Grid.Container gap={2} justify="flex-start"  data-testid={`principal-list`}>
          {pokemons && pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
          {newPokemons.length > 0 && newPokemons?.map((pokemon: SmallPokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_ctx) => {
  const limit = 100;
  const offset = 0;

  return {
    props: {
      pokemons: await pokeApi.getPokemons(limit, offset),
    },
  };
};

export default HomePage;
