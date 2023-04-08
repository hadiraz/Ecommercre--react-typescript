import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import {  RootState } from "../store"
export type InitialProfile = {
    userName : string
    password: string
}
const initialState: InitialProfile = {
    userName : "" ,
    password : ""
}

export const cartSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        ADD_PROFILE: (state, action : PayloadAction<InitialProfile>) => {
            state.userName = action.payload.userName ;
            state.password = action.payload.password ;
        },
    }

})

export const { ADD_PROFILE } = cartSlice.actions;
export const selectProfile = (state: RootState) => state.profile
export default cartSlice.reducer
