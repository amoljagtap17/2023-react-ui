import { useQuery } from "@tanstack/react-query";
import { iBlogCategory } from "app/types";
import { axiosInstance } from "app/utils";

const getBlogsCategories = async () => {
  const blogsCategories: iBlogCategory[] = await axiosInstance.get(
    "/blogs/categories"
  );

  return blogsCategories;
};

export const useBlogsCategoriesQuery = () => {
  return useQuery({
    queryKey: ["blogs", "categories"],
    queryFn: getBlogsCategories,
  });
};
