import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const customBreakpoints = {
  values: {
    tablet: 768,
    mobileLg: 425,
    mobile: 320,
  },
};

const breakpoints = createBreakpoints({ ...customBreakpoints });

export const theme = createTheme({
  breakpoints: {
    ...breakpoints,
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: "white",
        color: "#3A8DFF",
        fontWeight: 600,
        height: 54,
        borderRadius: 5,
        boxShadow: "0px 2px 12px 0px rgba(74, 106, 149, 0.2)",
        [breakpoints.up("mobileLg")]: {
          minWidth: 140,
          padding: "16px 34px",
        },
      },
      containedSizeLarge: {
        fontSize: 16,
        fontWeight: 700,
        height: 56,
        width: 160,
        borderRadius: 3,
      },
    },
    MuiInput: {
      input: {
        fontSize: 14,
        fontWeight: 600,
        padding: "8px 5px",
      },
    },
    MuiFormLabel: {
      root: {
        color: "#B0B0B0 !important",
        fontSize: 14,
        fontWeight: 400,
        paddingLeft: 5,
      },
    },
    MuiInputLabel: {
      shrink: {
        transform: "none",
      },
    },
    MuiInputBase: {
      root: {
        marginBottom: 26,
      },
    },
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" },
  },
});
