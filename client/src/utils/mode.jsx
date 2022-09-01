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
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: orange[900],
            },
            divider: deepOrange[200],
            text: {
              primary: grey[900],
              secondary: grey[900],
            },
            icon: {
              primary: {
                main: grey[900],
              },
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: deepOrange[600],
            },
            divider: grey[700],
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: "#fff",
              secondary: "#fff",
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
