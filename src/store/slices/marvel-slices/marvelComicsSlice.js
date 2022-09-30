import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { MARVEL_API_URL } from '../../../constants/apiDetails'

const marvelComicSlice = createSlice({
    name: 'comics',
    initialState: {
        comics: [],
        isLoading: true,
        hasError:false,
    },
    reducers: {
            
    },
    extraReducers: (builder) => {
        
        builder.addCase(marvelComicsFetch.fulfilled, (state, action) => {
            // Add comics to the state array
            console.log(action.payload);
            state.comics.push(...action.payload)
        })
    },


    
});
export const marvelComicActions = marvelComicSlice.actions;
export default marvelComicSlice.reducer;
export const selectAllComics = (state) => state.comics.comics;
// Creation of a thunk for fetching data
// Thunk: a piece of code that requires us to wait for a while for action to be performed.
export const marvelComicsFetch = createAsyncThunk('comics/marvelComicsFetch', async () => {
    const response = await fetch(`${MARVEL_API_URL}`).then((res) => res.json());
    const results = response.data.results;    
    return results;
})