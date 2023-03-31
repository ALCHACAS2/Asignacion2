import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { Layout } from '../layouts';
import { localFavorites } from '../../utils';
import { Pokemon } from '../../interfaces';

const confettiConfiguration = {
  zIndex: 999,
  particleCount: 100,
  spread: 160,
  angle: -100,
  origin: {
    x: 1,
    y: 0,
  },
};

interface PokemonProps {
  pokemon: Pokemon;
}

export const PokemonPrincipalCard: NextPage<PokemonProps> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);
  useEffect(() => {
    if (pokemon.id > 151) {
      localFavorites.addNewPokemonToLocalStorage(pokemon.id);
    }
  },[pokemon]);
  useEffect(() => {
    setIsInFavorites(localFavorites.existInFavorites(pokemon.id));
  }, [pokemon.id]);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (!isInFavorites) {
      confetti(confettiConfiguration);
    }
  };
  return (
    <Layout title={`${pokemon.name}`} data-testid={`pokemon-name`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }} data-testid={`pokemon-card`}>
            <Card.Body>
              <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name} width="100%" height={200} data-testid={`pokemon-card-image`}/>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize" data-testid={`pokemon-card-title`}>
                {pokemon.name}
              </Text>

              <Button data-testid={`toggle-favorites-button`} color="gradient" 
                ghost={!isInFavorites} onPress={onToggleFavorite}>
                {isInFavorites ? 'Remove from favorites' : 'Add to favorites'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction="row" display="flex" gap={0}  data-testid={`pokemon-card-sprites`}>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};
