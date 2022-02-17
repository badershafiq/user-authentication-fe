import * as Yup from "yup";

exports.AuthFormValidation = Yup.object().shape({
  password: Yup.string()
    .min(8, "It should be least 8 characters long")
    .required("Password is Required"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
});
