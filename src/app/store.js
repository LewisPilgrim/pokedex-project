import { configureStore } from '@reduxjs/toolkit';
import pokeIdReducer from '../features/pokemon/pokemonSlice';
import idsReducer from '../features/ids/idsSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
    reducer: {
        pokemon: pokeIdReducer,
        id: idsReducer,
        search: searchReducer
    }
})