import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/auth/auth.slice";

const Header = ({ openSignUp, openSignIn }) => {
    const isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logOut());
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
                    </>
                )}
            </Stack>
        </Box>
    );
};

export default Header;
