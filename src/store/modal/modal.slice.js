import { createSlice } from "@reduxjs/toolkit";
// Default State
const INITIAL_STATE = {
    modalStatus: false,
    modalType: "",
};

const modalSlice = createSlice({
    name: "modal",
    initialState: INITIAL_STATE,
    reducers: {
        openModal: (state, action) => {
            state.modalStatus = action.payload.status;
            state.modalType = action.payload.modalType;
        },
        closeModal: (state, action) => {
            state.modalStatus = action.payload.status;
            state.modalType = action.payload.modalType;
        },
    },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
