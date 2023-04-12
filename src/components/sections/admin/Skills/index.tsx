import { Stack } from "@mui/material";
import { useSkillsQuery } from "app/hooks";
import { Heading, ReactQueryWrapper } from "components/lib";
import { SkillsFormContainer } from "./SkillsFormContainer";

export function Skills() {
  const skillsQuery = useSkillsQuery();

  return (
    <Stack spacing={4}>
      <Heading text="Update Skills" center={true} />

      <ReactQueryWrapper queryResult={skillsQuery}>
        <SkillsFormContainer skills={skillsQuery.data || []} />
      </ReactQueryWrapper>
    </Stack>
  );
}
