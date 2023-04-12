import {
  Box,
  CircularProgress as MuiCircularProgress,
  circularProgressClasses,
  Theme,
} from "@mui/material";

export function CircularProgress() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        minHeight: "50vh",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <MuiCircularProgress
          variant="determinate"
          sx={{
            color: (theme: Theme) =>
              theme.palette.grey[theme.palette.mode === "light" ? 200 : 900],
          }}
          size={100}
          thickness={4}
          value={100}
        />
        <MuiCircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color: (theme: Theme) =>
              theme.palette.mode === "light"
                ? theme.palette.primary.main
                : theme.palette.primary.main,
            animationDuration: "1000ms",
            position: "absolute",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          }}
          size={100}
          thickness={4}
        />
      </Box>
    </Box>
  );
}
