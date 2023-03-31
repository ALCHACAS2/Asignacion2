import React, { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';
interface props {
  pokemons: number[];
}
export const FavoritePokemons: FC<props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start"
    data-testid={`favorites-list`}>
      {pokemons.map((id: number) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
