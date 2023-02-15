import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemon: [],
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
    currentId: 1
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemon: (state, action) => {
            state.pokemon = action.payload;
        },
        increment: (state) => {
            state.currentId += 1
        },
        decrement: (state) => {
            state.currentId -= 1
        },
        setIdTo: (state, action) => {
            state.currentId = action.payload;
        }
    }
})

export const selectAllPokemon = (state) => state.pokemon.pokemon;
export const getPokesStatus = (state) => state.pokemon.status;
export const getPokesError = (state) => state.pokemon.error;
export const selectCurrentId = (state) => state.pokemon.currentId;

export const { increment, decrement, setPokemon, setIdTo } = pokemonSlice.actions;

export default pokemonSlice.reducer;