import { Box, Typography } from "@mui/material";
import { iSkill } from "app/types";

interface iPrimarySkillItemProps extends Pick<iSkill, "name" | "percent"> {}

export function PrimarySkillItem({ name, percent }: iPrimarySkillItemProps) {
  return (
    <Box padding={1} borderColor="primary.main" border={4}>
      <Box
        bgcolor="secondary.main"
        width={`${percent}%`}
        display="flex"
        justifyContent="space-between"
        padding={1}
      >
        <Typography variant="h6" fontWeight={600} component="span">
          {name}
        </Typography>
        <Typography variant="h6" fontWeight={600} component="span">
          {percent}%
        </Typography>
      </Box>
    </Box>
  );
}
