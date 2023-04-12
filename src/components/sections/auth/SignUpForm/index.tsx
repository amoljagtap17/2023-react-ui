import { yupResolver } from "@hookform/resolvers/yup";
import { iSignUpFormData } from "app/types";
import { enqueueSnackbar } from "notistack";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { SignUp } from "../SignUp";
import { useSignUpMutation } from "./useSignUpMutation";
import { validationSchema } from "./validationSchema";

const defaultValues: iSignUpFormData = {
  email: "",
  password: "",
};

export function SignUpForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const methods = useForm<iSignUpFormData>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const signUpMutation = useSignUpMutation();

  const onSubmit = async (data: iSignUpFormData) => {
    try {
      await signUpMutation.mutateAsync(data);

      enqueueSnackbar({
        message: "User is registered. Please login using the credentials.",
        variant: "success",
      });

      methods.reset(defaultValues);

      navigate("/login", { state: location.state });
    } catch (error) {
      methods.setError("root.serverError", { type: (error as any).statusCode });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <SignUp />
      </form>
    </FormProvider>
  );
}
