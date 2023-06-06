import * as Yup from "yup";
const PasswordRegEx =
    /^.*((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

export const INITIAL_VALUES_SIGN_IN = {
    password: "",
    email: "",
};

export const VALIDATION_SCHEMES_SIGN_IN = Yup.object({
    password: Yup.string()
        .required("Enter Your Password")
        .matches(PasswordRegEx, "Uppercase Lowercase Special char Required")
        .min(8, "Password Should be minimum 8 character")
        .max(50, "Too long"),
    email: Yup.string().required("Please Enter your Email"),
});

export const INITIAL_VALUES_SIGN_UP = {
    password: "",
    confirmPassword: "",
    email: "",
    fname: "",
    lname: "",
};

export const VALIDATION_SCHEMES_SIGN_UP = Yup.object({
    password: Yup.string()
        .required("Enter Your Password")
        .matches(PasswordRegEx, "Uppercase Lowercase Special char Required")
        .min(8, "Password Should be minimum 8 character")
        .max(50, "Too long"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password does not matched")
        .required("Confirm Password is Required"),
    email: Yup.string().required("Please Enter your Email"),
    fname: Yup.string().required("Please Enter your First Name"),
    lname: Yup.string().required("Please Enter your Last Name"),
});
