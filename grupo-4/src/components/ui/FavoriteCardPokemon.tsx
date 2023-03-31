import React, { FC } from 'react';
import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface props {
  id: number;
}

export const FavoriteCardPokemon: FC<props> = ({ id }) => {
  const router = useRouter();
  const onPress = () => {
    router.push(`/pokemon/id/${id}`);
  };
  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable css={{ padding: 10 }} onPress={onPress} data-testid={`card-${id}`}>
        <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={'100%'} height={140} data-testid={`pokemon-card-image-${id}`} />
      </Card>
    </Grid>
  );
};
