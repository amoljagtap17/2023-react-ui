import { object, string } from "yup";

export const validationSchema = object({
  email: string().email("Please enter email").required("Email is required"),
  password: string()
    .trim()
    .min(5, "Minimum 5 characters long")
    .required("Password is required"),
}).required();
