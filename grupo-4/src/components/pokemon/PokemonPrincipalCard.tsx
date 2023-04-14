import { useEffect, useState } from "react";
import { NextPage } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { Layout } from "../layouts";
import { Pokemon } from "../../interfaces";

interface PokemonProps {
  pokemon: Pokemon;
}

export const PokemonPrincipalCard: NextPage<PokemonProps> = ({ pokemon }) => {
  const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase();
  return (
    <Layout  title={`${pokemon.name}`} data-testid={`pokemon-name`}>
      <div className="bg-blue-200 h-screen ">
        <div className="flex flex-col items-center justify-center bg-blue-200">
          <div className="mx-10 flex flex-col items-center justify-center">
            <h2 className=" font-extrabold text-4xl">{pokemonName}</h2>
            <Image className="items-center p-10" src={pokemon.sprites.other?.dream_world.front_default || "/no-image.png"} alt={pokemon.name} width="300px" height="300px"></Image>
          </div>
          <div className="items-center justify-center ">
              <p className="flex justify-center font-bold text-3xl">Sprites:</p>
              <div className="lg:flex ">
                <div className="">
                  <span className="mb-5">De frente</span>
                  <Image className="w-100 h-100 mt-5" src={pokemon.sprites.front_default} alt={pokemon.name} width={200} height={100}></Image>
                </div>
                <div className="">
                  <span className="mb-5">De espalda</span>
                  <Image className="w-100 h-100 mt-5" src={pokemon.sprites.back_default} alt={pokemon.name} width={200} height={100}></Image>
                </div>
                <div className="">
                  <span className="mb-5">De frente shiny</span>
                  <Image className="w-100 h-100 mt-5" src={pokemon.sprites.front_shiny} alt={pokemon.name} width={200} height={100}></Image>
                </div>
                <div className="">
                  <span className="mb-5">De espalda shiny</span>
                  <Image className="w-100 h-100 mt-5" src={pokemon.sprites.back_shiny} alt={pokemon.name} width={200} height={100}></Image>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};