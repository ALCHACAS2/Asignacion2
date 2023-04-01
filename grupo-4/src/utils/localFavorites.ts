import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

const toggleFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (favorites.includes(id)) {
    favorites = favorites.filter((item) => item !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites.includes(id);
};
const pokemons = (): number[] => {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

const addNewPokemonToLocalStorage = (newPokemonId:number)  => {
  if (typeof window === 'undefined') return [];

  const newPokemonList = JSON.parse(localStorage.getItem('newPokemonList') || '[]');
  
  if (!newPokemonList.includes(newPokemonId)) {
    newPokemonList.push(newPokemonId);
    localStorage.setItem('newPokemonList', JSON.stringify(newPokemonList));
  }
};

const getNewPokemonsSearched = async () => {
  if (typeof window === 'undefined') return [];

  const newPokemonList = JSON.parse(localStorage.getItem('newPokemonList') || '[]');
  
  const result=  await Promise.all( newPokemonList.map(async (pokemonId:number) => {
    const [newPokemon] = await getPokemons(1, pokemonId - 1);
    return newPokemon;
  })); 
  return result;
  
};

const getPokemons = async (limit: number, offset: number): Promise<SmallPokemon[]> => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=${limit}&offset=${offset}`);
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    const id: string = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '');
    
    return {
      ...pokemon,
      id: Number(id),
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    };
  });
  return pokemons;
};

const exportedFunctions = { toggleFavorites, existInFavorites, pokemons, getNewPokemonsSearched, getPokemons, addNewPokemonToLocalStorage };

export default exportedFunctions;
