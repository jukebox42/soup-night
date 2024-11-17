"use client"
import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#000",
      paper: "#000",
    },
    primary: {
      main: "#DE9B72",
    },
    secondary: {
      main: "#DE9B72",
    },
    info: {
      main: "#DE9B72",
    },
    text: {
      primary: "#F7F7F6",
      secondary: "#DE9B72",
    },
  },
  typography: {
    h1: {
      fontFamily: "Birthstone Bounce",
    },
    h2: {
      fontFamily: "Birthstone Bounce",
    },
    h3: {
      fontFamily: "Birthstone Bounce",
    },
    h4: {
      fontFamily: "Birthstone Bounce",
    },
    h5: {
      fontFamily: "Birthstone Bounce",
    },
    h6: {
      fontFamily: "Birthstone Bounce",
    },
    fontFamily: "Dosis",
  }
};

const theme = createTheme(themeOptions);

export default theme;