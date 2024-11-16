"use client"
import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#3A3D3E",
      paper: "#3A3D3E",
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
      fontFamily: "Birthstone",
    },
    h2: {
      fontFamily: "Birthstone",
    },
    h3: {
      fontFamily: "Birthstone",
    },
    h4: {
      fontFamily: "Birthstone",
    },
    h5: {
      fontFamily: "Birthstone",
    },
    h6: {
      fontFamily: "Birthstone",
    },
    fontFamily: "Lato",
  }
};

const theme = createTheme(themeOptions);

export default theme;