import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const themeConstants = {
  colors: {
    background: {
      label: "Background",
      value: "#FFF3DB",
    },
    primary: {
      label: "Primary",
      value: "#202020",
    },
    secondary: {
      label: "Secondary",
      value: "#ffcc0d",
    },
    error: {
      label: "Error",
      value: "#DC2B2B",
    },
    success: {
      label: "Success",
      value: "#11845B",
    },
  },
  borders: {
    small: "2px solid #202020",
    large: "4px solid #202020",
  },
};

const { background, primary, secondary, error, success } =
  themeConstants.colors;
const { borders } = themeConstants;

const _theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: background.value,
    },
    primary: {
      main: primary.value,
    },
    secondary: {
      main: secondary.value,
    },
    error: {
      main: error.value,
    },
    success: {
      main: success.value,
    },
  },
  typography: {
    fontFamily: ["Raleway", "sans-serif"].join(","),
    fontSize: 16,
    fontWeightRegular: 500,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
        size: "large",
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "40px",
          maxWidth: "100%",
          display: "block",
          fontWeight: 700,
          padding: "8px 22px",
          [theme.breakpoints.up("md")]: {
            maxWidth: "350px",
            display: "flex",
          },
        }),
        outlined: ({ theme }) => ({
          width: "100%",
          border: borders.small,
          "&:hover": {
            borderWidth: "2px",
          },
          [theme.breakpoints.up("md")]: {
            borderWidth: "4px",
            "&:hover": {
              borderWidth: "4px",
            },
          },
        }),
        contained: ({ theme }) => ({
          width: "100%",
          border: borders.small,
          "&:hover": {
            borderWidth: "2px",
          },
          [theme.breakpoints.up("md")]: {
            borderWidth: "4px",
            "&:hover": {
              borderWidth: "4px",
            },
          },
        }),
        textPrimary: {
          padding: 0,
          borderRadius: 0,
        },
        fullWidth: {
          maxWidth: "100% !important",
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        variant: "outlined",
        square: true,
      },
    },
    MuiPopover: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        paper: {
          borderRadius: "40px",
        },
      },
    },
    MuiPopper: {
      defaultProps: {
        disablePortal: true,
      },
    },
    MuiList: {
      defaultProps: {
        disablePadding: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          "&.MuiMenu-list": {
            borderRadius: "40px",
            border: borders.small,
            background: "rgba(255, 243, 219, 0.7)",
            [theme.breakpoints.up("md")]: {
              borderWidth: "4px",
            },
          },
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: "10px 20px",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          lineHeight: "30px",
          marginLeft: 5,
          marginRight: 5,
          "&.active .MuiButtonBase-root": {
            borderBottom: "2px solid #FFD19B",
            borderRadius: 0,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: "0px",
          marginBottom: "24px",
        },
        avatar: {
          margin: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0px",
          minHeight: "150px",
          "& h3": {
            fontSize: "30px",
            lineHeight: "1.33em",
            fontWeight: 700,
            marginBottom: "16px",
          },
          "& p": {
            marginBottom: "32px",
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "0px",
          "& button": {
            // fontWeight: 700,
            // padding: 0,
            textTransform: "none",
            "& .MuiButton-endIcon svg": {
              fontSize: "40px",
              transform: "rotate(-30deg)",
            },
          },
        },
      },
    },
    MuiAvatar: {
      defaultProps: {
        variant: "square",
      },
      styleOverrides: {
        root: {
          background: "transparent",
          width: "80px",
          height: "80px",
          "& svg": {
            color: "#202020",
            fontSize: "5rem",
          },
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        autoComplete: "none",
      },
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "none",
          },
          "&.MuiInputBase-multiline": {
            padding: 0,
            "& textarea": {
              padding: "16.5px 14px",
            },
          },
        },
        input: ({ theme }) => ({
          borderRadius: "40px",
          fontWeight: 700,
          padding: "20px 30px",
          border: borders.small,
          [theme.breakpoints.up("md")]: {
            borderWidth: "4px",
          },
          "&:focus": {
            borderRadius: "40px",
          },
        }),
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          textAlign: "left",
          marginBottom: "5px",
          fontWeight: 700,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            margin: 0,
            paddingTop: "5px",
            paddingBottom: "5px",
            fontWeight: 700,
          },
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "3rem",
          color: theme.palette.secondary.main,
          [theme.breakpoints.up("md")]: {
            fontSize: "5rem",
          },
        }),
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          background: "transparent",
          border: "none",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& th.MuiTableCell-root": {
            fontWeight: 700,
            borderBottom: borders.small,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: ({ theme }) => ({
          padding: "1rem",
          [theme.breakpoints.up("md")]: {
            padding: "2rem",
            maxWidth: "800px",
          },
        }),
      },
    },
  },
});

export const theme = responsiveFontSizes(_theme);
