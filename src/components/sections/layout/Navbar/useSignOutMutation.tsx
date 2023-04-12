import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "app/utils";

const signOut = () => {
  return axiosInstance.post("/auth/logout");
};

export const useSignOutMutation = () => {
  return useMutation({
    mutationFn: signOut,
  });
};
