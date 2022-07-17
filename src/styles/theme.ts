import { ThemeOptions as MuiThemeOptions, createTheme } from "@mui/material"

export interface ThemeOptions extends MuiThemeOptions {
  components?: MuiThemeOptions["components"] & {
    MuiSelect?: {
      styleOverrides?: {
        root?: Record<string, any>
      }
    }
  }
}

export const themeColor = {
  primary: {
    main: "#343434",
    light: "#4d4d4d",
    dark: "#1a1a1a",
    "50": "#ffffff",
    "100": "#cdcdcd",
    "200": "#e6e6e6",
    "300": "#b3b3b3",
    "400": "#808080",
    "500": "#676767",
    "600": "#4d4d4d",
    "700": "#343434",
    "800": "#1a1a1a",
    "900": "#000000"
  },
  secondary: {
    main: "#2196f3",
    light: "#64b5f6",
    dark: "#1565c0",
    "50": "#e3f2fd",
    "100": "#bbdefb",
    "200": "#90caf9",
    "300": "#64b5f6",
    "400": "#42a5f5",
    "500": "#2196f3",
    "600": "#1e88e5",
    "700": "#1976d2",
    "800": "#1565c0",
    "900": "#0d47a1"
  }
}

export const theme: ThemeOptions = createTheme({
  palette: themeColor,
  typography: { fontSize: 14 },
  components: {
    MuiInputBase: {
      styleOverrides: {
        inputSizeSmall: { paddingTop: ".25rem !important", paddingBottom: ".25rem !important" },
        input: { paddingTop: ".7rem !important", paddingBottom: ".7rem !important" },
        adornedStart: { paddingLeft: ".5rem !important", "& svg": { marginRight: ".25rem" } }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: { paddingTop: "0 !important", paddingBottom: "0 !important" }
      }
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { minWidth: "unset", textTransform: "inherit", boxShadow: "none", ":hover": { boxShadow: "none" } }
      }
    },
    MuiChip: {
      styleOverrides: {
        sizeSmall: { background: "transparent" },
        colorPrimary: { background: themeColor?.primary.main }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: { boxShadow: "none", borderWidth: "2px", padding: "1rem" }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: { fontSize: "inherit" }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#f3f6f9",
          border: "1px solid #e0e3e7",
          borderRadius: "0.625rem",

          "&.Mui-focused:after": { opacity: 1 },
          "& fieldset": { border: 0 },
          "&::before,&::after": { content: "none" }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: "#f3f6f9",
            border: "1px solid #e0e3e7",
            borderRadius: "0.625rem",

            "&.Mui-focused:after": { opacity: 1 },
            "& fieldset": { border: 0 },
            "&::before,&::after": { content: "none" }
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent"
        }
      }
    }
  }
} as ThemeOptions)
