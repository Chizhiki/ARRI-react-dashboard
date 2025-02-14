import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "light"
    ? {
        white: {
          100: "#f8f9fc",
          200: "#f0f2f8",
          300: "#e7ebf3",
          400: "#dfe4ef",
          500: "#d7dde9",
          600: "#aeb1ba",
          700: "#86898c",
          800: "#5d616d",
          900: "#35393f",
        },
        orange: {
          100: "#fff0e3",
          200: "#ffd8b7",
          300: "#ffc18a",
          400: "#ffaa5e",
          500: "#ff8c2c",
          600: "#cc7013",
          700: "#99550f",
          800: "#66390a",
          900: "#331d05",
        },
        green: {
          100: "#e6f6f5",
          200: "#caeceb",
          300: "#ade3e1",
          400: "#91d9d7",
          500: "#75d0cd",
          600: "#5ea6a4",
          700: "#477c7b",
          800: "#305252",
          900: "#182929",
        },
        secondary: {
          100: "#f2f3ff",
          200: "#e6e6ff",
          300: "#c7c9ff",
          400: "#a6aaff",
          500: "#777dff",
          600: "#5d63cc",
          700: "#444a99",
          800: "#2a3066",
          900: "#111633",
        },
        primary: {
          100: "#e8edfa",
          200: "#d0dbf5",
          300: "#b5c6ef",
          400: "#9ab0e9",
          500: "#7f9be3", 
          600: "#667cb6", 
          700: "#4d5d88",
          800: "#333e5b",
          900: "#1a1f2d",
        },

        gradients: {
          main: `linear-gradient(100deg, rgb(163, 163, 163) 50%,rgb(124, 124, 124) 100%)`,
          fancy: `rgb(53, 53, 53)`,
          comps: 'rgb(255, 255, 255)',
          greybackground: "rgb(246, 249, 254)",
          orange: `rgb(33, 141, 255)`,
        },
      }
    : {
        white: {
          100: "#181a2f",
          200: "#212339",
          300: "#2a2c44",
          400: "#33354f",
          500: "#3b3d59",
          600: "#606178",
          700: "#858697",
          800: "#aaabb5",
          900: "#d0d2d4",
        },
        orange: {
          100: "#2e1a08",
          200: "#4d2e0d",
          300: "#6c4312",
          400: "#8b5818",
          500: "#ab6d1e",
          600: "#d1812f",
          700: "#e39b54",
          800: "#f6b57a",
          900: "#ffd0a0",
        },
        green: {
          100: "#0a2e2d",
          200: "#0f4b49",
          300: "#146865",
          400: "#1a8580",
          500: "#1fa29c",
          600: "#4cb5ad",
          700: "#7ec7c0",
          800: "#afdad2",
          900: "#e1ece5",
        },
        secondary: {
          100: "#0d101e",
          200: "#171a34",
          300: "#21244a",
          400: "#2c2f60",
          500: "#363a76",
          600: "#575c91",
          700: "#777eab",
          800: "#989fc6",
          900: "#b8c1e0",
        },
        primary: {
          100: "#0b0d1e",
          200: "#14193c",
          300: "#1e265a",
          400: "#273278",
          500: "#303f96",
          600: "#5960ab",
          700: "#8282c0",
          800: "#aba3d4",
          900: "#d4c5e9",
        },

        gradients: {
          main: "linear-gradient(135deg, #303f96 0%, #363a76 100%)",
          //fancy: "linear-gradient(120deg,rgb(30, 35, 67),rgb(49, 55, 102))", 
          fancy: `rgb(53, 53, 53)`,
          fancysec: `rgb(53, 53, 53)`,
          //comps: "linear-gradient(120deg,rgb(30, 35, 67),rgb(49, 55, 102))",
          greybackground: "linear-gradient(120deg,rgb(53, 53, 53) 10%,rgb(28, 28, 28) 60%)",
          comps: `rgba(53, 53, 53)`,
          //orange: `linear-gradient(100deg,rgb(252, 126, 9) 0%, rgb(252, 0, 0) 20%,rgb(145, 67, 255) 90%)`,
          orange: 'linear-gradient(120deg,rgb(255, 85, 0) 20%, rgb(255, 112, 23) 90%)' 
        },

      }
  ),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.orange[700],
              main: colors.orange[500],
              light: colors.orange[100],
            },
            background: {
              default: "rgb(33, 33, 33)", 
              paper: "rgb(25, 30, 56)", 
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.orange[700],
              main: colors.orange[500],
              light: colors.orange[100],
            },
            background: {
              default: "#f6f9fe", 
              paper: "rgb(247, 247, 247)"  
            },
          }),
    },

    gradients: {
      mode: mode,
      ...(mode === "dark"
        ? {
            main: colors.gradients.main, 
            fancy: colors.gradients.fancy,
            comps: colors.gradients.comps,
            orange: colors.gradients.orange,
            greybackground: colors.gradients.greybackground
          }
        : {
            main: colors.gradients.main,   
            fancy: colors.gradients.fancy, 
            comps: colors.gradients.comps,
            orange: colors.gradients.orange,
            greybackground: colors.gradients.greybackground
          }),
    },

    typography: {
      fontFamily: ["Comfortaa", "serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Comfortaa", "serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Comfortaa", "serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Comfortaa", "serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Comfortaa", "serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Comfortaa", "serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Comfortaa", "serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const systemPrefersDark = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;

  const storedMode = localStorage.getItem("themeMode");
  const initialMode = storedMode
    ? storedMode
    : systemPrefersDark
    ? "dark"
    : "light";

  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};