import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { amber, deepOrange, grey, orange, red } from "@mui/material/colors";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({
  toggleMode: () => {},
});

export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  console.log(mode);

  const colorMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = createTheme({
    palette: {
      mode: mode,

      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: orange[900],
              contrastText: "#fff",
            },
            secondary: {
              main: "#f48fb1",
            },
            divider: deepOrange[200],
            text: {
              primary: grey[900],
              secondary: deepOrange[900],
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: deepOrange[600],
              contrastText: "rgba(0,0,0,0.87)",
            },
            divider: grey[700],
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: "#fff",
              secondary: deepOrange[900],
            },
          }),
    },
    typography: {
      fontFamily: "Roboto, Helvetica Neue, Arial, sans-serif",
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
