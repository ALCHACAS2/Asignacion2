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
    <div className="flex flex-row space-x-4 justify-self-end mr-8">
      <input ref={inputRef} className="mt-2 h-10 form-input w-full px-3 py-2 rounded-md bg-white" type="text" placeholder="ID de pokemon a buscar" id="search"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleClick();
          }
        }}
      />
      <button className=" mt-2 h-10 w-40 rounded-md bg-blue-800 mx-3" onClick={handleClick}>Search</button>
    </div>
  );
};
