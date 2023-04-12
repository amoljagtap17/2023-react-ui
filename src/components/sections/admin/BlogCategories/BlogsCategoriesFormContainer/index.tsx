import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { useBlogsCategoriesMutation } from "app/hooks";
import { iBlogCategory, iBlogsCategoriesFormData } from "app/types";
import { enqueueSnackbar } from "notistack";
import { FormProvider, useForm } from "react-hook-form";
import { BlogsCategoriesForm } from "../BlogsCategoriesForm";
import { validationSchema } from "./validationSchema";

interface iBlogsCategoriesFormContainerProps {
  blogsCategories: iBlogCategory[];
}

export function BlogsCategoriesFormContainer({
  blogsCategories,
}: iBlogsCategoriesFormContainerProps) {
  const methods = useForm<iBlogsCategoriesFormData>({
    defaultValues: { blogsCategories },
    resolver: yupResolver(validationSchema),
    reValidateMode: "onSubmit",
  });

  const queryClient = useQueryClient();
  const blogsCategoriesMutation = useBlogsCategoriesMutation();

  const onSubmit = async (formData: iBlogsCategoriesFormData) => {
    await blogsCategoriesMutation.mutateAsync(formData.blogsCategories);

    enqueueSnackbar({
      message: "Blogs Categories updated successfully.",
      variant: "success",
    });

    queryClient.invalidateQueries({ queryKey: ["blogs", "categories"] });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        onReset={() => methods.reset()}
        noValidate
      >
        <BlogsCategoriesForm />
      </form>
    </FormProvider>
  );
}
