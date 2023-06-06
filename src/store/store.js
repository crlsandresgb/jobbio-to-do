import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.slice";
import modalSlice from "./modal/modal.slice";
import todoSlice from "./todo/todo.slice";
import userDBSlice from "./userDB/userDB.slice";

export default configureStore({
    reducer: {
        modal: modalSlice,
        userDB: userDBSlice,
        auth: authSlice,
        todo: todoSlice,
    },
});
