import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Arvo', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  styles: {
    global: ({ colorMode }: { colorMode: string }) => ({
      body: {
        bgColor: colorMode === "dark" ? "gray.800" : "gray.50",
      },
    }),
  },
});
