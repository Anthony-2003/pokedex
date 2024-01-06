import { useEffect, useState } from "react";
import axios from "axios";
import { IconSearch } from "@tabler/icons-react";
import { PokemonList } from "./PokemonList";
import { Pokemon } from "../types/types";

export const Pokedex = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="p-4 py-5">
      <form>
        <div className="bg-white p-4 flex rounded-2xl text-lg">
          <input
            className="outline-none flex-1"
            type="text"
            placeholder="Search your Pokemon"
          />
          <button className="bg-red-500 p-2 rounded-2xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors">
            <IconSearch color="white" stroke={3} />
          </button>
        </div>
      </form>
      <PokemonList pokemons={allPokemons}/>
    </section>
  );
};
