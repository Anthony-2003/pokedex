import axios from "axios";

const BASE_URL: string = "https://pokeapi.co/api/v2/pokemon/";

export const getEvolutionsData = (evolutions) => {
  return evolutions.map(
    async (evolution) => await axios.get(`${BASE_URL}${evolution.name}`)
  );
};


