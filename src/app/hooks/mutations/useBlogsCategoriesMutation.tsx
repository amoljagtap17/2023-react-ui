import { useMutation } from "@tanstack/react-query";
import { iBlogCategory } from "app/types";
import { axiosInstance } from "app/utils";

const createBlogsCategories = (data: iBlogCategory[]) => {
  return axiosInstance.post("/blogs/categories", data);
};

export const useBlogsCategoriesMutation = () => {
  return useMutation({
    mutationFn: createBlogsCategories,
  });
};
