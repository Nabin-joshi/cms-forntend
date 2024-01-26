import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().min(5).max(30).required("Email is required"),
  password: yup.string().min(8).max(25).required("Password is Required"),
});

export default loginSchema;
