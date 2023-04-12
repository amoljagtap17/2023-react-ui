import { useMutation } from "@tanstack/react-query";
import { iSignInFormData } from "app/types";
import { axiosInstance } from "app/utils";

const signUp = (data: iSignInFormData) => {
  return axiosInstance.post("/auth/register", data);
};

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: signUp,
  });
};
