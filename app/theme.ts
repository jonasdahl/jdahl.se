import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    // heading: `'Arvo', sans-serif`,
    heading: "'Roboto Mono', mono-space",
    body: `'Roboto', sans-serif`,
    mono: "'Roboto Mono', mono-space",
  },
  styles: {
    global: ({ colorMode }: { colorMode: string }) => ({
      body: {
        bgColor: colorMode === "dark" ? "gray.800" : "gray.50",
      },
    }),
  },
});
