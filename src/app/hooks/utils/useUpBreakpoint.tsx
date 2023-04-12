import { Breakpoint, Theme, useMediaQuery } from "@mui/material";

export const useUpBreakpoint = (breakpoint: Breakpoint = "md") => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.up(breakpoint));
};
