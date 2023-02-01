import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 2
}

const idsSlice = createSlice({
    name: 'id',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})

export const { increment, decrement } = idsSlice.actions;

export const pokeId = (state) => state.id.count;

export default idsSlice.reducer;