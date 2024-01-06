
export type Pokemon = {
    url: string,
    name: string
}

export type PokemonResponse = {
    id: number;
    name: string;
    sprites: {
      versions: {
        "generation-v": {
          "black-white": {
            front_default: string;
          };
        };
      };
    };
    types: {
      type: {
        name: string;
      };
    }[];
  }