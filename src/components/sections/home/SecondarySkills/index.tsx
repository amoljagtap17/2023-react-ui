import { Grid, Stack } from "@mui/material";
import { iSkill } from "app/types";
import { Heading, SecondarySkillItem } from "components/lib";

interface iSecondarySkillsProps {
  skills: iSkill[];
}

export function SecondarySkills({ skills }: iSecondarySkillsProps) {
  const secondarySkills = skills.map(({ id, name }) => (
    <Grid item xs={12} lg={6} key={id} padding={2}>
      <SecondarySkillItem name={name} />
    </Grid>
  ));

  return (
    <Stack spacing={2}>
      <Heading text="Secondary Skills" center={true} />
      <Grid container>{secondarySkills}</Grid>
    </Stack>
  );
}
