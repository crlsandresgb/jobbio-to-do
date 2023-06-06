import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/auth/auth.slice";
import { removeAllLists } from "../../store/todo/todo.slice";
import { updateUserToDoList } from "../../store/userDB/userDB.slice";

const Header = ({ openSignUp, openSignIn }) => {
    const isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const userId = useSelector((state) => state.auth.id);
    const todoLists = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    // Handle Log Out
    const handleLogOut = () => {
        dispatch(logOut());
        dispatch(removeAllLists());
    };
    // Handle Save Lists
    const handleSaveLists = () => {
        dispatch(
            updateUserToDoList({
                userId: userId,
                toDoList: todoLists,
            })
        );
    };
    return (
        <Box m={3}>
            <Stack direction="row" spacing={2}>
                {!isUserLoggedIn ? (
                    <>
                        <Button onClick={openSignUp} variant="contained">
                            Sign Up
                        </Button>
                        <Button onClick={openSignIn} variant="contained">
                            Sign In
                        </Button>
                    </>
                ) : (
                    <>
                        <Button onClick={handleLogOut} variant="contained">
                            Log Out
                        </Button>
                        <Button onClick={handleSaveLists} variant="contained">
                            Save Lists
                        </Button>
                    </>
                )}
            </Stack>
        </Box>
    );
};

export default Header;
