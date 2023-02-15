import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
const initialState = {
    pokemon: [],
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
    currentId: 1
}

export const fetchPokes = createAsyncThunk('pokemon/fetchPokes', async () => {
    try {
        const response = await axios.get(`${baseURL}`)
        return response.data.results;
    } catch (err) {
        return err.message;
    }
})

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
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPokes.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPokes.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.pokemon = action.payload
            })
            .addCase(fetchPokes.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectAllPokemon = (state) => state.pokemon.pokemon;
export const getPokesStatus = (state) => state.pokemon.status;
export const getPokesError = (state) => state.pokemon.error;
export const selectCurrentId = (state) => state.pokemon.currentId;

export const { increment, decrement, setPokemon, setIdTo } = pokemonSlice.actions;

export default pokemonSlice.reducer;