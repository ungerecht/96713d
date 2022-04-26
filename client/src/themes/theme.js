import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      tablet: 768,
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 14,
    button: {
      textTransform: 'none',
      letterSpacing: 0,
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: 'white',
        color: '#3A8DFF',
        fontWeight: 600,
        height: '54px',
        minWidth: '140px',
        padding: '16px 34px',
        borderRadius: '5px',
      },
      containedSizeLarge: {
        fontSize: 16,
        fontWeight: 700,
        height: '56px',
        width: '160px',
        borderRadius: '3px',
      },
    },
    MuiInput: {
      input: {
        fontSize: 14,
        fontWeight: 600,
        padding: '8px 5px',
      },
    },
    MuiFormLabel: {
      root: {
        color: '#B0B0B0 !important',
        fontSize: 14,
        fontWeight: 400,
        paddingLeft: '5px',
      },
    },
    MuiInputLabel: {
      shrink: {
        transform: 'none',
      },
    },
    MuiInputBase: {
      root: {
        marginBottom: '26px',
      },
    },
  },
  palette: {
    primary: { main: '#3A8DFF' },
    secondary: { main: '#B0B0B0' },
  },
});
