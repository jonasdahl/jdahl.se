import { Center, Container } from "@chakra-ui/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocale } from "remix-i18next";
import { BouncingContainer } from "~/components/bouncing-container";
import { Contact } from "~/components/contact";
import { LanguageButton } from "~/components/language-button";
import { Link } from "~/components/link";
import { Resume } from "~/components/resume";
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
  const cvRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <LanguageButton
        to={locale?.startsWith("en") ? "/" : "/?lng=en"}
        label={t("change-language", { ns: "translation" })}
      />

      <Center h="100vh" color="white">
        <Contact
          name="Jonas Dahl"
          description={t("jonas-description", { ns: "resume" })}
          phone="+46 (0)70-796 48 83"
          email="jonas@jdahl.se"
          githubUsername="jonasdahl"
          website={{ url: "https://jdahl.se", title: "jdahl.se" }}
        />
      </Center>

      <BouncingContainer marginTop="-100px" height="100px">
        <Center>
          <Link
            color="white"
            fontSize="3xl"
            to="#cv"
            onClick={(e: { preventDefault: () => void }) => {
              e.preventDefault();
              cvRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            title={t("show-resume")}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </Center>
      </BouncingContainer>

      <Container maxW="container.md" ref={cvRef} pb={24}>
        <Resume />
      </Container>
    </>
  );
}
