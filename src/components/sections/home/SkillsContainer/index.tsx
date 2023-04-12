import { Stack } from "@mui/material";
import { useSkillsQuery } from "app/hooks";
import { EnumSkillCategory } from "app/types";
import { CircularProgress } from "components/lib";
import { PrimarySkills } from "../PrimarySkills";
import { SecondarySkills } from "../SecondarySkills";

export function SkillsContainer() {
  const skillsQuery = useSkillsQuery();

  if (skillsQuery.isLoading) {
    return <CircularProgress />;
  }

  const primarySkills =
    skillsQuery.data?.filter(
      ({ category }) => category === EnumSkillCategory.PRIMARY
    ) || [];

  const secondarySkills =
    skillsQuery.data?.filter(
      ({ category }) => category === EnumSkillCategory.SECONDARY
    ) || [];

  return (
    <Stack spacing={4}>
      <PrimarySkills skills={primarySkills} />
      <SecondarySkills skills={secondarySkills} />
    </Stack>
  );
}
