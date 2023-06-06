import { createSlice } from "@reduxjs/toolkit";

// Default State
const INITIAL_STATE = {
    id: "",
    name: "",
    email: "",
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    reducers: {
        logIn: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isLoggedIn = true;
        },
        logOut: (state) => {
            state.id = "";
            state.name = "";
            state.email = "";
            state.isLoggedIn = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
