import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth/auth.slice";
import modalSlice from "./modal/modal.slice";
import todoSlice from "./todo/todo.slice";
import userDBSlice from "./userDB/userDB.slice";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducers = combineReducers({
    modal: modalSlice,
    userDB: userDBSlice,
    auth: authSlice,
    todo: todoSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [],
});
