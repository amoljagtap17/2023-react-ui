import { useQuery } from "@tanstack/react-query";
import { iSkill } from "app/types";
import { axiosInstance } from "app/utils";

const getSkills = async () => {
  const skills: iSkill[] = await axiosInstance.get("/skills");

  return skills;
};

export const useSkillsQuery = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
  });
};
