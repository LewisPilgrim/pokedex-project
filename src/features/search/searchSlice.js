import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: ''
};

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        newSearchTerm: (state, action) => {
            state.query = action.payload;
        }
    }
})

export const { newSearchTerm } = SearchSlice.actions

export const selectQuery = state => state.search.query;

export default SearchSlice.reducer;