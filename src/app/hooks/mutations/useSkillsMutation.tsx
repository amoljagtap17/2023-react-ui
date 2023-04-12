import { useMutation } from "@tanstack/react-query";
import { iSkill } from "app/types";
import { axiosInstance } from "app/utils";

const createUpdateSkills = (data: Omit<iSkill, "id">[]) => {
  return axiosInstance.post("/skills", data);
};

export const useSkillsMutation = () => {
  return useMutation({
    mutationFn: createUpdateSkills,
  });
};
