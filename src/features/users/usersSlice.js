import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:'0', name:'Oduyale Enoch',
    },

        {id:'1', name:'Michael Adetoro'},
        {id:'2', name:'Omotosho Matthew'}


]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;