import { extendTheme } from "@chakra-ui/react";
import clouds from "./clouds.avif";

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: `url(${clouds})`,
        bgColor: "#000",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      },
    }),
  },
});
