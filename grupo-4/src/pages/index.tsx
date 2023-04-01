import { NextPage } from 'next';
import { Grid } from '@nextui-org/react';
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next';
import { SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';
import { useEffect, useState } from 'react';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  const [newPokemons, setNewPokemons] = useState<any>([]);

  return (
    <div>
      <Layout title="Listado de Pokémons">
        <Grid.Container gap={2} justify="flex-start"  data-testid={`principal-list`}>
          {pokemons && pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
          {newPokemons.length > 0 && newPokemons?.map((pokemon: SmallPokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
        </Grid.Container>
      </Layout>
    </div>
  );
};


export default HomePage;
