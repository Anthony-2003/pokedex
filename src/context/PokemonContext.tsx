import React, { createContext, ReactNode, useState } from "react";
import { formatAbilities, formatStats, formatTypes, getEvolution, getImageByPokemon, getPokemonDescription } from "../helpers/pokemon";
import axios from "axios";

interface PokemonProviderProps {
  children: ReactNode;
}

interface PokemonContextProps {
  showDetailPokemon: boolean;
  setShowDetailPokemon: React.Dispatch<React.SetStateAction<boolean>>;
  showPokemon: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  closePokemonDetail: (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => void;
}

const PokemonContext = createContext<PokemonContextProps | undefined>(
  undefined
);

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [showDetailPokemon, setShowDetailPokemon] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const showPokemon = async (pokemonInfo) => {
    setIsLoading(true);
    const {data: dataSpecies} = await axios.get(pokemonInfo.species.url);
    const {data: dataEvolution} = await axios.get(dataSpecies.evolution_chain.url)
    
    const { id, name, height, weight, stats, types, abilities } = pokemonInfo;

    const evolutions = await getEvolution(dataEvolution);
   
    setPokemonDetail({
      id,
      name,
      height,
      weight,
      stats: formatStats(stats),
      types: formatTypes(types),
      abilities: formatAbilities(abilities),
      description: getPokemonDescription(dataSpecies),
      evolutions,
      image: getImageByPokemon(pokemonInfo.sprites)
    });

    setShowDetailPokemon(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const closePokemonDetail = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setShowDetailPokemon(false);
  };

  const contextValue: PokemonContextProps = {
    showDetailPokemon,
    setShowDetailPokemon,
    showPokemon,
    closePokemonDetail,
    pokemonDetail,
    isLoading
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
