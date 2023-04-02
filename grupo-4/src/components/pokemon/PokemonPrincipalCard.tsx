import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Layout } from "../layouts";
import { Pokemon } from "../../interfaces";
import Image from "next/image";

interface PokemonProps {
  pokemon: Pokemon;
}

export const PokemonPrincipalCard: NextPage<PokemonProps> = ({ pokemon }) => {
  return (
    <Layout title={`${pokemon.name}`} data-testid={`pokemon-name`}>
      <div>
        <div>
          <div>
            <main>
              <Image src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"} alt={pokemon.name} />
            </main>
          </div>
        </div>
        <div>
          <div>
            <header>
              <h1>{pokemon.name}</h1>
            </header>

            <main>
              <h2>Sprites:</h2>
              <div>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

/*

<Layout title={`${pokemon.name}`} data-testid={`pokemon-name`}>
      <div>
        <div>
          <div>
            <main>
              <Image src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"} alt={pokemon.name} />
            </main>
          </div>
        </div>
        <div>
          <div>
            <header>
              <h1>{pokemon.name}</h1>
            </header>

            <main>
              <h2>Sprites:</h2>
              <div>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>

*/
