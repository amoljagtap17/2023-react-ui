import { useMutation, useQueryClient } from "@tanstack/react-query";
import { iBlog, iBlogFormData } from "app/types";
import { axiosInstance } from "app/utils";
import { enqueueSnackbar } from "notistack";

const createBlog = (data: iBlogFormData): Promise<iBlog> => {
  return axiosInstance.post("/blogs", data);
};

const updateBlog = (data: iBlogFormData): Promise<iBlog> => {
  return axiosInstance.patch(`/blogs/${data.id}`, data);
};

const deleteBlog = (id: string): Promise<iBlog> => {
  return axiosInstance.delete(`/blogs/${id}`);
};

export const useBlogMutation = () => {
  const queryClient = useQueryClient();

  const onSuccess = (message: string) => {
    queryClient.invalidateQueries({ queryKey: ["blogs"], exact: true });
    queryClient.invalidateQueries({
      queryKey: ["blogs", "published"],
      exact: true,
    });

    enqueueSnackbar({
      message,
      variant: "success",
    });
  };

  const createBlogMutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => onSuccess("Blog created successfully."),
  });

  const updateBlogMutation = useMutation({
    mutationFn: updateBlog,
    onSuccess: () => onSuccess("Blog updated successfully."),
  });

  const deleteBlogMutation = useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => onSuccess("Blog deleted successfully."),
  });

  return {
    createBlogMutation,
    updateBlogMutation,
    deleteBlogMutation,
  };
};
