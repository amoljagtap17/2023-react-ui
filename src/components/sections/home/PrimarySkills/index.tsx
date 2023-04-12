import { Grid, Stack } from "@mui/material";
import { iSkill } from "app/types";
import { Heading, PrimarySkillItem } from "components/lib";

interface iPrimarySkillsProps {
  skills: iSkill[];
}

export function PrimarySkills({ skills }: iPrimarySkillsProps) {
  const primarySkills = skills.map(({ id, name, percent }) => (
    <Grid item xs={12} lg={6} key={id} padding={2}>
      <PrimarySkillItem name={name} percent={percent} />
    </Grid>
  ));

  return (
    <Stack spacing={2}>
      <Heading text="Primary Skills" center={true} />
      <Grid container>{primarySkills}</Grid>
    </Stack>
  );
}
