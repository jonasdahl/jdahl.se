import { HStack, Spacer } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { DarkModeButton } from "~/components/dark-mode-button";
import { LanguageButton } from "~/components/language-button";
import { Link } from "~/components/link";

export function TopBar({ locale }: { locale: string }) {
  const { t } = useTranslation(["translation"]);

  return (
    <HStack as="nav" p={3} spacing={5}>
      <LanguageButton
        to={locale?.startsWith("en") ? "/" : "/?lng=en"}
        label={t("change-language", { ns: "translation" })}
      />
      <Spacer />
      <MenuLink to="/">Start</MenuLink>
      <MenuLink to="/about">Jonas</MenuLink>
      <Spacer />
      <DarkModeButton />
    </HStack>
  );
}

function MenuLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      fontWeight="bold"
      fontFamily="heading"
      textDecoration="none"
      _focus={{ textDecoration: "underline" }}
      _hover={{ textDecoration: "underline" }}
    >
      {children}
    </Link>
  );
}
