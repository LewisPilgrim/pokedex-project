import { configureStore } from '@reduxjs/toolkit';
import pokeIdReducer from '../features/pokemon/pokemonSlice';
import idsReducer from '../features/ids/idsSlice';

export const store = configureStore({
    reducer: {
        pokemon: pokeIdReducer,
        id: idsReducer,
    }
})