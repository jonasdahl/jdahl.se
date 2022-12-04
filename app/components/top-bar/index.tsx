import { Box, HStack, Spacer } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { DarkModeButton } from "~/components/dark-mode-button";
import { LanguageButton } from "~/components/language-button";
import { Link } from "~/components/link";

export function TopBar({ locale }: { locale: string }) {
  const { t } = useTranslation(["translation"]);

  return (
    <HStack as="nav" p={14} spacing={8} alignItems="flex-end" lineHeight={1}>
      <Link
        to="/"
        fontWeight="bold"
        fontFamily="mono"
        textDecoration="none"
        fontSize="2xl"
        _hover={{ textDecoration: "none" }}
      >
        Jonas Dahl
      </Link>
      <Box />
      <MenuLink to="/about">Om</MenuLink>
      <Spacer />
      <HStack>
        <DarkModeButton />
        <LanguageButton
          to={locale?.startsWith("en") ? "/" : "/?lng=en"}
          label={t("change-language", { ns: "translation" })}
        />
      </HStack>
    </HStack>
  );
}

function MenuLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      fontWeight="bold"
      fontFamily="mono"
      textDecoration="none"
      _hover={{ textDecoration: "none" }}
    >
      {children}
    </Link>
  );
}
