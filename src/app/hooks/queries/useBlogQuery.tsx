import { useQuery } from "@tanstack/react-query";
import { iBlog } from "app/types";
import { axiosInstance } from "app/utils";

const getBlog = async (slug: string) => {
  const blog: iBlog = await axiosInstance.get(`/blogs/${slug}`);

  return blog;
};

export const useBlogQuery = (slug: string) => {
  return useQuery({
    queryKey: ["blogs", slug],
    queryFn: () => getBlog(slug),
    enabled: slug.trim().length > 0,
  });
};
