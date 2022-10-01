import { createSlice } from "@reduxjs/toolkit";

const marvelCharacterSlice = createSlice({
name:'characters',
initialState:{
    characters:[],
    isLoading:false,
    hasError:false,
},
reducers: {
   
}


    
})
// Exporting the Actions for the use of dispatch
export const { characterAdd } = marvelCharacterSlice.actions;
// Exporting as default the combined reducer functions as a single reducer for the root reducer use case.
export default marvelCharacterSlice.reducer;