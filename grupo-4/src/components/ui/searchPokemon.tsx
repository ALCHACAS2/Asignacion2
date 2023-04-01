import React, { useRef } from "react";
export const Search = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputRef.current.value}`).then((response) => {
      if (response.ok) {
        window.open(`https://pokeapi.co/api/v2/pokemon/${inputRef.current.value}`, "_blank");
      } else {
        throw new Error("No se pudo abrir la página");
      }
    });
  };
  return (
    <div className="flex flex-row space-x-4">
      <input ref={inputRef} className="px-2 py-1" type="text" placeholder="Ingresa el numero de pokemon a buscar" />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};
