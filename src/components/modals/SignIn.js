import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/auth/auth.slice";
import { populateUserLists } from "../../store/todo/todo.slice";
import {
    INITIAL_VALUES_SIGN_IN,
    VALIDATION_SCHEMES_SIGN_IN,
} from "../../utilities/formValidation";

const SignIn = ({ onClose }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userDB);
    const handleSignIn = (values) => {
        // Find user on simulated DB
        const findUser = users.find(
            (user) =>
                user.email === values.email && user.password === values.password
        );
        // Log In User
        dispatch(logIn(findUser));
        // Get all lists from DB
        dispatch(populateUserLists(findUser.toDoList));
        // Close Modal
        onClose();
    };

    const formik = useFormik({
        initialValues: INITIAL_VALUES_SIGN_IN,
        validationSchema: VALIDATION_SCHEMES_SIGN_IN,
        onSubmit: handleSignIn,
    });
    return (
        <Box>
            <Box my={1}>
                <Typography variant="h5">Sign In</Typography>
            </Box>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={
                        formik.errors.email && formik.touched.email
                            ? formik.errors.email
                            : null
                    }
                    error={formik.errors.email && formik.touched.email}
                    type="email"
                    required
                />
                <TextField
                    label="Password"
                    name="password"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={
                        formik.errors.password && formik.touched.password
                            ? formik.errors.password
                            : null
                    }
                    error={formik.errors.password && formik.touched.password}
                    type="password"
                    required
                />
                <Box mt={1}>
                    <Button type="submit" variant="contained" fullWidth>
                        Sign In
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default SignIn;
