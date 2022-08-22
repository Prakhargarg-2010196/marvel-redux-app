import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
name:'search',
initialState:{
    characters:[],
    isLoading:false,
    hasError:false,
}



    
})

export default searchSlice