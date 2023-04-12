import { number, object, string } from "yup";

export const validationSchema = object().shape({
  title: string().required("Title is required"),
  excerpt: string().required("Excerpt is required"),
  content: string().required("Content is required"),
  blogCategoryId: string().required("Category is required"),
  ratings: number().required("Rating is required").min(0.5),
});
