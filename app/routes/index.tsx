import { Center, Container } from "@chakra-ui/react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LinksFunction } from "@remix-run/node";
import { useRef } from "react";
import { BouncingContainer } from "~/components/bouncing-container";
import { Contact } from "~/components/contact";
import { LanguageButton } from "~/components/language-button";
import { Link } from "~/components/link";
import { Resume } from "~/components/resume";
import englishFlag from "~/english.png";

export const links: LinksFunction = () => {
  return [{ rel: "alternate", hrefLang: "sv-SE", href: "https://jdahl.se" }];
};

export default function Index() {
  const cvRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <LanguageButton to="/en" label="In English" flag={englishFlag} />

      <Center h="100vh" color="white">
        <Contact
          name="Jonas Dahl"
          description="Civilingenjör i Datateknik. Mjukvaruutvecklare på Challengermode."
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
            onClick={(e) => {
              e.preventDefault();
              cvRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
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
