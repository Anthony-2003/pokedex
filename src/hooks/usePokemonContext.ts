import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const usePokemonContext = () => useContext(PokemonContext);
