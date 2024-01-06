import React from 'react';
import { PokemonCard } from './PokemonCard';
import { Pokemon } from '../types/types';

interface PokemonListProps {
  pokemons: Pokemon[];
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <section className='pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-4 gap-y-14'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonURL={pokemon.url} />
      ))}
    </section>
  );
};
