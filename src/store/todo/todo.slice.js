import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Default State
const INITIAL_STATE = [
    // {
    //     id: uuidv4(),
    //     toDoList: [
    //         {
    //             id: uuidv4(),
    //             task: "Task 1",
    //             completed: false,
    //             editing: false,
    //         },
    //     ],
    // },
    // {
    //     id: uuidv4(),
    //     toDoList: [
    //         {
    //             id: uuidv4(),
    //             task: "Task 2",
    //             completed: false,
    //             editing: false,
    //         },
    //     ],
    // },
];

const todoSlice = createSlice({
    name: "todo",
    initialState: INITIAL_STATE,
    reducers: {
        addList: (state, action) => {
            state.push(action.payload);
        },
        removeList: (state, action) => {
            return state.filter((list) => list.id !== action.payload);
        },
        addTodo: (state, action) => {
            const { id, task, completed } = action.payload;
            const list = state.find((list) => list.id === id);
            list.toDoList.push({ id: uuidv4(), task, completed });
        },
        removeTodo: (state, action) => {
            const { id, todoId } = action.payload;
            const list = state.find((list) => list.id === id);
            list.toDoList = list.toDoList.filter((todo) => todo.id !== todoId);
        },
        changeTodoStatus: (state, action) => {
            const { id, todoId } = action.payload;
            const list = state.find((list) => list.id === id);
            const todo = list.toDoList.find((todo) => todo.id === todoId);
            todo.completed = !todo.completed;
        },
        changeEditStatus: (state, action) => {
            const { id, todoId } = action.payload;
            const list = state.find((list) => list.id === id);
            const todo = list.toDoList.find((todo) => todo.id === todoId);
            todo.editing = !todo.editing;
        },
        changeTodoName: (state, action) => {
            const { id, todoId, task } = action.payload;
            const list = state.find((list) => list.id === id);
            const todo = list.toDoList.find((todo) => todo.id === todoId);
            todo.task = task;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    addList,
    removeList,
    addTodo,
    removeTodo,
    changeTodoStatus,
    changeEditStatus,
    changeTodoName,
} = todoSlice.actions;

export default todoSlice.reducer;
