import Link from "next/link";
import { Search } from "./searchPokemon";

export const Navbar = () => {
  return (
    <div className=" lg:h-14 bg-blue-400 lg:grid lg:grid-cols-2 h-16 ">
      <h1 className="lg:mt-2 ml-2 lg:text-4xl  text-blue-800 sm:text-2xl"><a href="/">Pokedex</a></h1>
      <Search  />
    </div>
  );
};
