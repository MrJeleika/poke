import React, { useEffect } from 'react';
// Components
import { Options } from './Options/Options';
import { Search } from './Search/Search';

export const Sort = (props) => {
  const { setPokemonListThunk, searchPokemonByNameThunk } = props;
  useEffect(() => {
    setPokemonListThunk(0, 50);
  }, []);
  return (
    <div>
      <Search
        setPokemonList={setPokemonListThunk}
        searchPokemonByName={searchPokemonByNameThunk}
      />

      <Options setPokemonList={setPokemonListThunk} {...props} />
    </div>
  );
};
