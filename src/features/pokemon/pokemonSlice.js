import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {name: 'Bulbasaur', id: 1, type1: 'Grass', type2: 'Poison'},
    {name: 'Ivysaur', id: 2, type1: 'Grass', type2: 'Poison'},
    {name: 'Venusaur', id: 3, type1: 'Grass', type2: 'Poison'},
]

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {}
})

export const selectAllPokemon = (state) => state.pokemon;

export default pokemonSlice.reducer;