import { useQuery } from "@tanstack/react-query";
import { iBlog } from "app/types";
import { axiosInstance } from "app/utils";

const getBlogs = async (published: boolean) => {
  let blogs: iBlog[] = [];

  if (published) {
    blogs = await axiosInstance.get("/blogs/published");
  } else {
    blogs = await axiosInstance.get("/blogs");
  }

  return blogs;
};

export const useBlogsQuery = (published: boolean = true) => {
  return useQuery({
    queryKey: published ? ["blogs", "published"] : ["blogs"],
    queryFn: () => getBlogs(published),
  });
};
