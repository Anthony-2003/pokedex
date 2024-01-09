import React, { createContext, ReactNode, useState } from "react";

interface PokemonProviderProps {
  children: ReactNode;
}

interface PokemonContextProps {
  showDetailPokemon: boolean;
  setShowDetailPokemon: React.Dispatch<React.SetStateAction<boolean>>;
  showPokemonById: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  closePokemonDetail: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}


const PokemonContext = createContext<PokemonContextProps | undefined>(
  undefined
);

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const [showDetailPokemon, setShowDetailPokemon] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const showPokemonById = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setShowDetailPokemon(true);
  };
  

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const closePokemonDetail = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setShowDetailPokemon(false);
  };

  const contextValue: PokemonContextProps = {
    showDetailPokemon,
    setShowDetailPokemon,
    showPokemonById,
    closePokemonDetail,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
