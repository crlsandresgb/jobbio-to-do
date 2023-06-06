import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
    Box,
    Button,
    Checkbox,
    Divider,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { useDispatch } from "react-redux";
import {
    addTodo,
    changeEditStatus,
    changeTodoName,
    changeTodoStatus,
    removeList,
    removeTodo,
} from "../../store/todo/todo.slice";
import { Item } from "./styles";

const ToDo = ({ list }) => {
    const dispatch = useDispatch();
    // Remove List
    const handleRemoveList = () => {
        dispatch(removeList(list.id));
    };
    // Add new to do
    const handleAddToDo = () => {
        const payload = {
            id: list.id,
            task: "New Task",
            completed: false,
            editing: false,
        };
        dispatch(addTodo(payload));
    };
    // Remove To Do
    const handleRemoveToDo = (removeId) => {
        const payload = {
            id: list.id,
            todoId: removeId,
        };
        dispatch(removeTodo(payload));
    };
    // Complete To Do
    const handleCompleteToDo = (completeId) => {
        const payload = {
            id: list.id,
            todoId: completeId,
        };
        dispatch(changeTodoStatus(payload));
    };
    // Chnage Edit Status
    const handleEditToDo = (editId) => {
        const payload = {
            id: list.id,
            todoId: editId,
        };
        dispatch(changeEditStatus(payload));
    };
    // Change To Do Name
    const handleChangeToDoName = (editNameId) => {
        const changeNamePayload = {
            id: list.id,
            todoId: editNameId,
            task: document.getElementById(`edit-${editNameId}`).value,
        };
        dispatch(changeTodoName(changeNamePayload));

        const changeEditPayload = {
            id: list.id,
            todoId: editNameId,
        };
        dispatch(changeEditStatus(changeEditPayload));
    };
    return (
        <Grid xs={12} md={6}>
            <Item>
                <Box my={3} mx={2}>
                    {list.toDoList.map((item) => {
                        return (
                            <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                justifyContent="space-between"
                                key={item.id}
                            >
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Checkbox
                                        checked={item.completed}
                                        onChange={handleCompleteToDo.bind(
                                            null,
                                            item.id
                                        )}
                                    />
                                    {item.editing ? (
                                        <TextField
                                            id={`edit-${item.id}`}
                                            label="Task Name"
                                            variant="standard"
                                            defaultValue={item.task}
                                        />
                                    ) : (
                                        <Typography>{item.task}</Typography>
                                    )}
                                </Stack>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    {item.editing ? (
                                        <>
                                            <Tooltip title="Save">
                                                <SaveIcon
                                                    sx={{ cursor: "pointer" }}
                                                    onClick={handleChangeToDoName.bind(
                                                        null,
                                                        item.id
                                                    )}
                                                />
                                            </Tooltip>
                                            <Tooltip title="Cancel">
                                                <CancelIcon
                                                    sx={{ cursor: "pointer" }}
                                                    onClick={handleEditToDo.bind(
                                                        null,
                                                        item.id
                                                    )}
                                                />
                                            </Tooltip>
                                        </>
                                    ) : (
                                        <Tooltip title="Edit">
                                            <EditIcon
                                                sx={{ cursor: "pointer" }}
                                                onClick={handleEditToDo.bind(
                                                    null,
                                                    item.id
                                                )}
                                            />
                                        </Tooltip>
                                    )}
                                    <Tooltip title="Delete">
                                        <DeleteIcon
                                            sx={{ cursor: "pointer" }}
                                            onClick={handleRemoveToDo.bind(
                                                null,
                                                item.id
                                            )}
                                        />
                                    </Tooltip>
                                </Stack>
                            </Stack>
                        );
                    })}
                </Box>

                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button variant="contained" onClick={handleAddToDo}>
                        Add To Do
                    </Button>
                    <Button variant="contained" onClick={handleRemoveList}>
                        Delete List
                    </Button>
                </Stack>
            </Item>
        </Grid>
    );
};

export default ToDo;
