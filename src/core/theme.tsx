import { createTheme } from "@mui/material";
const theme = createTheme({
    palette: {
  mode: "light",
    primary: {
        main: "#2563EB", // Blue
    },
    secondary: {
        main: "#7C3AED", // Violet
    },
    success: {
        main: "#16A34A",
    },
    error: {
        main: "#DC2626",
    },
    warning: {
        main: "#F59E0B",
    },
    text: {
        primary: "#111827",
        secondary: "#6B7280",
    },
    }
});

export default theme;