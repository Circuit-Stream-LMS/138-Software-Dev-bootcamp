import React from 'react';

function PokemonDetails({ pokemon }) {
  return (
    <div className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="card-image" />
      <h3 className="card-title">{pokemon.name}</h3>
      <p className="card-info">Height: {pokemon.height}</p>
      <p className="card-info">Weight: {pokemon.weight}</p>
      <p className="card-info">Type: {pokemon.types.map(t => t.type.name).join(', ')}</p>
    </div>
  );
}

export default PokemonDetails;