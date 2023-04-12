import { yupResolver } from "@hookform/resolvers/yup";
import { iSignInFormData } from "app/types";
import { enqueueSnackbar } from "notistack";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserContextUpdater } from "../AuthProvider/useAuth";
import { SignIn } from "../SignIn";
import { useSignInMutation } from "./useSignInMutation";
import { validationSchema } from "./validationSchema";

const defaultValues: iSignInFormData = {
  email: "",
  password: "",
};

export function SignInForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const { signin } = useUserContextUpdater();

  const methods = useForm<iSignInFormData>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const signInMutation = useSignInMutation();

  const redirectTo =
    location.state === null ? "/" : location.state.from.pathname;

  const onSubmit = async (data: iSignInFormData) => {
    try {
      const response = await signInMutation.mutateAsync(data);

      methods.reset(defaultValues);

      enqueueSnackbar({
        message: "You are successfully logged in.",
        variant: "success",
      });

      signin(response, () => {
        navigate(redirectTo, { replace: true });
      });
    } catch (error) {
      methods.setError("root.serverError", { type: (error as any).statusCode });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <SignIn />
      </form>
    </FormProvider>
  );
}
