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
      <div className="flex flex-col bg-red-500">
        <div>
          <img src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"} alt={pokemon.name} />
        </div>

        <div>
          <h1>{pokemon.name}</h1>
          <div>
            <h2>Sprites:</h2>
            <div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
              <img src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
              <img src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
              <img src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

/*

 <Layout title={`${pokemon.name}`} data-testid={`pokemon-name`}>
      <div >
        <div>
          <div>
            <main>
            <img src= {pokemon.sprites.other?.dream_world.front_default || "/no-image.png"} alt={pokemon.name}  />
             </main>
          </div>
        </div>

        <div>
          <div>
            <header >
              <h1>
                {pokemon.name}
              </h1>
            </header>

            <main>
              <h2>Sprites:</h2>
              <div>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                <img src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                <img src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                <img src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>

*/
