import { GlobalStyles } from "@mui/material";
import { themeConstants } from "./theme";

export const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: 7,
        },
        "&::-webkit-scrollbar-track": {
          boxShadow: `inset 0 0 6px rgba(255, 243, 219, 0.7)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#202020",
        },
      },
      ".info-list": {
        position: "absolute",
        zIndex: 12,
        top: "420px",
        "& .MuiList-root": {
          background: "transparent",
          border: 0,
          borderRadius: 0,
          "& li:nth-of-type(1)": {
            margin: "160px 0 0 -50px",
          },
          "& li:nth-of-type(2)": {
            margin: "-30px 0 0 420px",
          },
          "& .MuiListItem-root": {
            display: "flex",
            alignItems: "center",
            boxShadow: "5px 5px rgba(0, 0, 0, 0.2)",
            width: "250px",
            height: "82px",
            padding: "0 20px",
            border: themeConstants.borders.large,
            borderRadius: "82px",
            background: "rgba(255, 243, 219, 1)",

            "& .MuiListItemText-root": {
              display: "flex",
              "& .MuiListItemText-primary": {
                fontSize: "2.2rem",
                fontWeight: 700,
              },
            },
          },
        },
      },
      ".notistack-MuiContent": {
        fontSize: "1.2rem",
        borderRadius: 0,
        boxShadow: "none",
        padding: "10px 20px",

        "&.notistack-MuiContent-success": {
          background: themeConstants.colors.success.value,
        },
        "&.notistack-MuiContent-error": {
          background: themeConstants.colors.error.value,
        },
      },
    }}
  />
);
