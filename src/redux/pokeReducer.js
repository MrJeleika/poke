import {
  APIgetEvolutionChain,
  APIgetPokemonByName,
  APIgetPokemonNamesList,
} from 'api/api';

const SET_POKEMON_LIST = 'SET_POKEMON_LIST';
const CLEAR_POKEMON_LIST = 'CLEAR_POKEMON_LIST';
const IS_FETCHING = 'IS_FETCHING';
const SET_TYPEFILTER1 = 'SET_TYPEFILTER1';
const SET_TYPEFILTER2 = 'SET_TYPEFILTER2';
const SET_WEIGHTFILTER = 'SET_WEIGHTFILTER';
const SET_HEIGHTFILTER = 'SET_HEIGHTFILTER';
const CLEAR_SEARCHFILTER_LIST = 'CLEAR_SEARCHFILTER_LIST';
const SET_POKEMON_SPECIES = 'SET_POKEMON_SPECIES';
const SET_EVOLUTION_CHAIN = 'SET_EVOLUTION_CHAIN';
const SET_ERROR_CODE = 'SET_ERROR_CODE';

let initialState = {
  pokemonSpecies: {},
  pokemonList: [],
  isFetching: false,
  typeFilter1: 'all', // Default value have to be changed in Select.jsx too
  typeFilter2: 'all', // Default value have to be changed in Select.jsx too
  minWeightFilter: 0, // Default value have to be changed in Select.jsx too
  maxWeightFilter: 500000, // Default value have to be changed in Select.jsx too
  minHeightFilter: 0, // Default value have to be changed in Select.jsx too
  maxHeightFilter: 500000, // Default value have to be changed in Select.jsx too
  evolutionChain: {},
  errorCode: '',
};

export const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: [...state.pokemonList, ...action.pokemonList],
      };
    case CLEAR_POKEMON_LIST:
      return {
        ...state,
        pokemonList: [],
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_TYPEFILTER1:
      return {
        ...state,
        typeFilter1: action.typeFilter1,
      };
    case SET_TYPEFILTER2:
      return {
        ...state,
        typeFilter2: action.typeFilter2,
      };
    case SET_WEIGHTFILTER:
      return {
        ...state,
        minWeightFilter: +action.minWeightFilter,
        maxWeightFilter: +action.maxWeightFilter,
      };
    case SET_HEIGHTFILTER:
      return {
        ...state,
        minHeightFilter: +action.minHeightFilter,
        maxHeightFilter: +action.maxHeightFilter,
      };
    case CLEAR_SEARCHFILTER_LIST:
      return {
        ...state,
        typeFilter1: 'all',
        typeFilter2: 'all',
        minWeightFilter: 0,
        maxWeightFilter: 50000,
        minHeightFilter: 0,
        maxHeightFilter: 50000,
      };
    case SET_POKEMON_SPECIES:
      return {
        ...state,
        pokemonSpecies: action.pokemonSpecies,
      };
    case SET_EVOLUTION_CHAIN:
      return {
        ...state,
        evolutionChain: action.evolutionChain,
      };
    case SET_ERROR_CODE:
      return {
        ...state,
        errorCode: action.errorCode,
      };
    default:
      return {
        ...state,
      };
  }
};

export const setPokemonList = (pokemonList) => ({
  type: SET_POKEMON_LIST,
  pokemonList,
});
export const clearPokemonList = () => ({
  type: CLEAR_POKEMON_LIST,
});
export const setIsFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});
export const setTypeFilter1 = (typeFilter1) => ({
  type: SET_TYPEFILTER1,
  typeFilter1,
});
export const setTypeFilter2 = (typeFilter2) => ({
  type: SET_TYPEFILTER2,
  typeFilter2,
});
export const setWeightFilter = (minWeightFilter, maxWeightFilter) => ({
  type: SET_WEIGHTFILTER,
  minWeightFilter,
  maxWeightFilter,
});
export const setHeightFilter = (minHeightFilter, maxHeightFilter) => ({
  type: SET_HEIGHTFILTER,
  minHeightFilter,
  maxHeightFilter,
});
export const clearSearchFilter = () => ({
  type: CLEAR_SEARCHFILTER_LIST,
});
export const setPokemonSpecies = (pokemonSpecies) => ({
  type: SET_POKEMON_SPECIES,
  pokemonSpecies,
});
export const setEvolutionChain = (evolutionChain) => ({
  type: SET_EVOLUTION_CHAIN,
  evolutionChain,
});
export const setErrorCode = (errorCode) => ({
  type: SET_ERROR_CODE,
  errorCode,
});

export const setPokemonListThunk = (from, to) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(clearPokemonList());
    dispatch(setErrorCode(''));
    let response = await APIgetPokemonNamesList(from, to);
    const arr = await Promise.all(
      response.map((e) => {
        return APIgetPokemonByName(e.url.split('/')[6]); //get pokemon id from url
      }),
    );
    dispatch(setPokemonList(arr));
    dispatch(setIsFetching(false));
  };
};

export const searchPokemonByNameThunk = (pokemon) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(clearPokemonList());
    dispatch(clearSearchFilter());
    dispatch(setErrorCode(''));
    try {
      let response = await APIgetPokemonByName(pokemon);
      dispatch(setPokemonList([response]));
    } catch (error) {
      // Clear pokemon list on API error
      dispatch(setErrorCode(error.response.status));
      dispatch(clearPokemonList());
    }
    dispatch(setIsFetching(false));
  };
};

export const setEvolutionChainThunk = (pokemon) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    let response = await APIgetEvolutionChain(pokemon);
    dispatch(setEvolutionChain(response));
    dispatch(setIsFetching(false));
  };
};
