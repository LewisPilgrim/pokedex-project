import { configureStore } from '@reduxjs/toolkit';
import pokeIdReducer from '../features/pokemon/pokemonSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
      }),
    reducer: {
        pokemon: pokeIdReducer,
        search: searchReducer
    }
})