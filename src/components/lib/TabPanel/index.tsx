import { Box } from "@mui/material";
import { ReactNode } from "react";

interface ITabPanelProps {
  children: ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`ui-tabpanel-${index}`}
      aria-labelledby={`ui-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
