import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { useSkillsMutation } from "app/hooks";
import { iSkill, iSkillsFormData } from "app/types";
import { enqueueSnackbar } from "notistack";
import { FormProvider, useForm } from "react-hook-form";
import { SkillsForm } from "../SkillsForm";
import { validationSchema } from "./validationSchema";

interface iSkillsFormContainerProps {
  skills: iSkill[];
}

export function SkillsFormContainer({ skills }: iSkillsFormContainerProps) {
  const methods = useForm<iSkillsFormData>({
    defaultValues: { skills },
    resolver: yupResolver(validationSchema),
  });

  const queryClient = useQueryClient();
  const skillsMutation = useSkillsMutation();

  const onSubmit = async (data: iSkillsFormData) => {
    const skills = data.skills.map(({ name, percent, category }) => ({
      name,
      percent,
      category,
    }));

    skillsMutation.mutate(skills, {
      onSuccess(_data, _variables, _context) {
        enqueueSnackbar({
          message: "Skills updated successfully.",
          variant: "success",
        });

        queryClient.invalidateQueries({ queryKey: ["skills"] });
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        onReset={() => methods.reset()}
        noValidate
      >
        <SkillsForm />
      </form>
    </FormProvider>
  );
}
