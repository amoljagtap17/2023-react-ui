import { array, object, string } from "yup";

export const validationSchema = object().shape({
  skills: array().of(
    object().shape({
      name: string().required("Name is required"),
      description: string().required("Description is required"),
    })
  ),
});
