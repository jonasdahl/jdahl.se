import { Box, Center, Flex, useColorModeValue } from "@chakra-ui/react";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { useLocale } from "remix-i18next";
import clouds from "~/clouds.avif";
import { Contact } from "~/components/contact";
import { TopBar } from "~/components/top-bar";
import i18next from "~/i18next.server";

export async function loader({ request }: LoaderArgs) {
  const locale = await i18next.getLocale(request);
  return json({ locale });
}

export const meta: MetaFunction<typeof loader> = ({ data: { locale } }) => {
  return {
    title: "Jonas Dahl",
    description:
      locale === "en"
        ? "Jonas Dahl. M.Sc Computer Science. React developer and Software Engineer."
        : "Jonas Dahl. Civilingenjör i Datateknik vid KTH. React-utvecklare och mjukvaruingenjör.",
  };
};

export const links: LinksFunction = () => {
  return [
    { rel: "alternate", hrefLang: "sv-SE", href: "https://jdahl.se" },
    { rel: "alternate", hrefLang: "en-US", href: "https://jdahl.se?lng=en" },
  ];
};

// This tells remix to load the "home" namespace
export let handle = {
  i18n: "resume",
};

export default function Index() {
  const { t } = useTranslation(["translation", "resume"]);

  const locale = useLocale();

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
        <TopBar locale={locale} />

        <Center flexGrow={1} pb={10}>
          <Contact
            name="Jonas Dahl"
            description={t("jonas-description", { ns: "resume" })}
            phone="+46 (0)70-796 48 83"
            email="jonas@jdahl.se"
            githubUsername="jonasdahl"
            website={{ url: "https://jdahl.se", title: "jdahl.se" }}
          />
        </Center>
      </Flex>
    </Box>
  );
}
