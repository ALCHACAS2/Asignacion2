import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { Layout } from "../layouts";
import { Pokemon } from "../../interfaces";

interface PokemonProps {
  pokemon: Pokemon;
}

export const PokemonPrincipalCard: NextPage<PokemonProps> = ({ pokemon }) => {
  return (
    <Layout title={`${pokemon.name}`} data-testid={`pokemon-name`}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }} data-testid={`pokemon-card`}>
            <Card.Body>
            <Card.Image src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"} alt={pokemon.name} width="100%" height={200} data-testid={`pokemon-card-image`} />
             </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
              <Text h1 transform="capitalize" data-testid={`pokemon-card-title`}>
                {pokemon.name}
              </Text>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites:</Text>

              <Container direction="row" display="flex" gap={0} data-testid={`pokemon-card-sprites`}>
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
