import { combineReducers } from "@reduxjs/toolkit";
import marvelCharacterSlice from "./slices/marvel-slices/marvelCharacterSlice";
import marvelComicsSlice from "./slices/marvel-slices/marvelComicsSlice";

const rootReducer = combineReducers({
    comics: marvelComicsSlice,
    characters:marvelCharacterSlice
});  


export default rootReducer