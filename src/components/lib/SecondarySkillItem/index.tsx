import { Box, Typography } from "@mui/material";
import { iSkill } from "app/types";

interface iSecondarySkillItemProps extends Pick<iSkill, "name"> {}

export function SecondarySkillItem({ name }: iSecondarySkillItemProps) {
  return (
    <Box
      padding={2}
      border={4}
      borderColor="primary.main"
      bgcolor="secondary.main"
    >
      <Typography
        variant="h6"
        fontWeight={600}
        component="div"
        textAlign="center"
      >
        {name}
      </Typography>
    </Box>
  );
}
