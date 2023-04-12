import { yupResolver } from "@hookform/resolvers/yup";
import { useBlogMutation, useBlogsCategoriesQuery } from "app/hooks";
import { iBlogFormData } from "app/types";
import { ReactQueryWrapper } from "components/lib";
import { FormProvider, useForm } from "react-hook-form";
import { NewBlogForm } from "../NewBlogForm";
import { validationSchema } from "./validationSchema";

const formDefaultValues: iBlogFormData = {
  id: "",
  title: "",
  excerpt: "",
  content: "",
  ratings: 0,
  isPublished: false,
  blogCategoryId: "",
};

interface iNewBlogFormContainerProps {
  onSubmitCallback: VoidFunction;
  defaultValues?: iBlogFormData;
}

export function NewBlogFormContainer({
  onSubmitCallback,
  defaultValues = formDefaultValues,
}: iNewBlogFormContainerProps) {
  const methods = useForm<iBlogFormData>({
    defaultValues,
    resolver: yupResolver(validationSchema),
    reValidateMode: "onSubmit",
  });

  const blogsCategoriesQuery = useBlogsCategoriesQuery();
  const { createBlogMutation, updateBlogMutation } = useBlogMutation();

  const onSubmit = async (formData: iBlogFormData) => {
    const onSuccess = () => {
      methods.reset(defaultValues);

      onSubmitCallback();
    };

    if (formData.id) {
      updateBlogMutation.mutate(formData, { onSuccess });
    } else {
      createBlogMutation.mutate(formData, {
        onSuccess,
      });
    }
  };

  return (
    <ReactQueryWrapper queryResult={blogsCategoriesQuery}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          onReset={() => methods.reset()}
          noValidate
        >
          <NewBlogForm blogsCategories={blogsCategoriesQuery.data || []} />
        </form>
      </FormProvider>
    </ReactQueryWrapper>
  );
}
