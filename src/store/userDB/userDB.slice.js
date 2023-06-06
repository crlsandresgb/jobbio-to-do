import { createSlice } from "@reduxjs/toolkit";

// Default State
const INITIAL_STATE = [
    {
        id: "35ba8926-9e3f-418d-8fd1-c3ab23228989",
        name: "Carlos Gutierrez",
        email: "crls.andres.gb@gmail.com",
        password: "Test123!",
        toDoList: [],
    },
];

const userDBSlice = createSlice({
    name: "userDB",
    initialState: INITIAL_STATE,
    reducers: {
        addUser: (state, action) => {
            state.push({
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                toDoList: [],
            });
        },
        updateUserToDoList: (state, action) => {
            const { userId, toDoList } = action.payload;
            const userIndex = state.findIndex((user) => user.id === userId);
            state[userIndex].toDoList = toDoList;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addUser } = userDBSlice.actions;

export default userDBSlice.reducer;
