import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Avatar: {
      baseStyle: {
        container: {
          background: "blueAlpha.300",

          color: "blue.500",
        },
      },
      sizes: {
        zeller: {
          container: {
            h: "36px",
            w: "36px",

            fontSize: "1rem",

            borderRadius: "sm",
          },
        },
      },
    },
  },
  colors: {
    blueAlpha: {
      50: "rgb(66, 153, 225, 0.04)",
      100: "rgb(66, 153, 225, 0.06)",
      200: "rgb(66, 153, 225, 0.08)",
      300: "rgb(66, 153, 225, 0.16)",
      400: "rgb(66, 153, 225, 0.24)",
      500: "rgb(66, 153, 225, 0.36)",
      600: "rgb(66, 153, 225, 0.48)",
      700: "rgb(66, 153, 225, 0.64)",
      800: "rgb(66, 153, 225, 0.80)",
      900: "rgb(66, 153, 225, 0.92)",
    },
  },
});

export default theme;