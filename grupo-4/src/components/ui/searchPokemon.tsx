import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
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
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};
