import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { logIn } from "../../store/auth/auth.slice";
import { addUser } from "../../store/userDB/userDB.slice";
import {
    INITIAL_VALUES_SIGN_UP,
    VALIDATION_SCHEMES_SIGN_UP,
} from "../../utilities/formValidation";

const SignUp = ({ onClose }) => {
    const dispatch = useDispatch();

    const handleSignUp = (values) => {
        // Generate user ID
        const id = uuidv4();
        // Add user to DB
        dispatch(
            addUser({
                id,
                name: values.fname + " " + values.lname,
                email: values.email,
                password: values.password,
            })
        );
        // Login User
        dispatch(
            logIn({
                id,
                name: values.fname + " " + values.lname,
                email: values.email,
            })
        );
        // Close Modal
        onClose();
    };

    const formik = useFormik({
        initialValues: INITIAL_VALUES_SIGN_UP,
        validationSchema: VALIDATION_SCHEMES_SIGN_UP,
        onSubmit: handleSignUp,
    });

    return (
        <Box>
            <Box my={1}>
                <Typography variant="h5">Sign Up</Typography>
            </Box>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    label="First Name"
                    name="fname"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={
                        formik.errors.fname && formik.touched.fname
                            ? formik.errors.fname
                            : null
                    }
                    error={formik.errors.fname && formik.touched.fname}
                    type="text"
                    required
                />
                <TextField
                    label="Last Name"
                    name="lname"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    value={formik.values.lname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={
                        formik.errors.lname && formik.touched.lname
                            ? formik.errors.lname
                            : null
                    }
                    error={formik.errors.lname && formik.touched.lname}
                    type="text"
                    required
                />
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
                <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={
                        formik.errors.confirmPassword &&
                        formik.touched.confirmPassword
                            ? formik.errors.confirmPassword
                            : null
                    }
                    error={
                        formik.errors.confirmPassword &&
                        formik.touched.confirmPassword
                    }
                    type="password"
                    required
                />
                <Box mt={1}>
                    <Button type="submit" variant="contained" fullWidth>
                        Sign Up
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default SignUp;
