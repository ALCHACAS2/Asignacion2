import React, { useRef, useState } from "react";
import { PokemonListResponse } from "../../interfaces/pokemon-list";
import { getStaticInformation } from "../../utils/getStaticInformation";
import { PokemonPrincipalCard } from "../pokemon/PokemonPrincipalCard";
import ReactDOM from "react-dom";
import { Pokemon } from "../../interfaces";
import { useRouter } from "next/router";
import pokeApi from "../../utils/localFavorites";
export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [newPokemons, setNewPokemons] = useState<any>([]);
  const router = useRouter();
  const handleClick = () => {
    const pokemonId = inputRef.current?.value;
    if (!pokemonId)
      return alert("Primero digite un numero de pokemon a buscar");
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
      async (response) => {
        if (response.ok) {
          router.push(`../../pokemon/id/${pokemonId}`);
        } else {
          throw new Error("No se pudo abrir la página");
        }
      }
    );
  };
  return (
    <div className="flex flex-row space-x-4">
      <input
        ref={inputRef}
        className="px-2 py-1"
        type="text"
        placeholder="Ingresa el numero de pokemon a buscar"
        id="search"
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};
