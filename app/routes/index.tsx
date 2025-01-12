import {
  Box,
  Center,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import clouds from "~/clouds.avif";
import i18next from "~/i18next.server";

export async function loader({ request }: LoaderArgs) {
  const locale = await i18next.getLocale(request);
  return json({ locale });
}

export const meta: MetaFunction<typeof loader> = ({ data: { locale } }) => {
  return { title: "Jonas Dahl" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "alternate", hrefLang: "sv-SE", href: "https://jdahl.se" },
    { rel: "alternate", hrefLang: "en-US", href: "https://jdahl.se?lng=en" },
  ];
};

// This tells remix to load the "home" namespace
export let handle = { i18n: "resume" };

export default function Index() {
  return (
    <Box
      bg={`url(${clouds})`}
      bgColor="#000"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      backgroundSize="cover"
      backgroundPosition="bottom"
    >
      <Flex
        minH="100vh"
        direction="column"
        color="white"
        backdropFilter={useColorModeValue(undefined, "brightness(50%)")}
      >
        <Center flexGrow={1}>
          <Heading>👋</Heading>
        </Center>
      </Flex>
    </Box>
  );
}
