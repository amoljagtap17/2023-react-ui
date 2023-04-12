import { useMutation } from "@tanstack/react-query";
import { iSignInFormData } from "app/types";
import { axiosInstance } from "app/utils";

const signIn = (data: iSignInFormData) => {
  return axiosInstance.post("/auth/login", data);
};

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: signIn,
  });
};
