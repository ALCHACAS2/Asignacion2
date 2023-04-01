import React, { useRef } from "react";
export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    const pokemonId = inputRef.current?.value;
    if (!pokemonId) return alert("Primero digite un numero de pokemon a buscar");
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((response) => {
      if (response.ok) {
        window.open(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, "_blank");
      } else {
        throw new Error("No se pudo abrir la página");
      }
    });
  };
  return (
    <div className="flex flex-row space-x-4">
      <input ref={inputRef} className="px-2 py-1" type="text" placeholder="Ingresa el numero de pokemon a buscar" id="search"/>
      <button onClick={handleClick}>Search</button>
    </div>
  );
};
