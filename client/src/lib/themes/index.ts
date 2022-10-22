import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey, common } from "@mui/material/colors";

const color = {
  primary: {
    500: "#0D5AE5",
    900: "#242051",
    100: "#8986a8",
  },
  secondary: {
    900: "#7daaff",
    700: "#96bbff",
    500: "#b0cbff",
    100: "#c9dcff",
  },
};

export const getDesignTokens = (mode?: PaletteMode): any => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            contrastText: "rgb(17, 24, 39)",
            main: common["white"],
            light: common["white"],
          },
          divider: common["black"],
          background: {
            default: "rgb(241, 245, 249)",
            // paper: "rgb(17, 24, 39)",
          },
          text: {
            primary: "rgb(17, 24, 39)",
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: grey[500],
          background: {
            default: common["black"],
            paper: common["black"],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
  typography: {
    "fontFamily": `"Poppins",sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    subtitle1: {
      fontSize: "11px",
      color: "rgb(156, 163, 175)",
      letterSpacing: "0.06px",
      fontWeight: 500,
      lineHeight: 1
    },
    caption: {
      fontSize: "12px",
      color: "rgb(129, 140, 248)",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      lineHeight: "20px"
    }
  }
});
