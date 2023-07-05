import { Box, HStack, Spacer, useMediaQuery } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { DarkModeButton } from "~/components/dark-mode-button";
import { LanguageButton } from "~/components/language-button";
import { Link } from "~/components/link";

export function TopBar({ locale }: { locale: string }) {
  const { t } = useTranslation(["translation"]);
  const [isPrint] = useMediaQuery("print");

  return (
    <HStack
      as="nav"
      py={{ base: 2, sm: 4, md: 6, lg: 14 }}
      px={{ base: 4, sm: 6, md: 8, lg: 16 }}
      spacing={8}
      alignItems="baseline"
      {...(isPrint ? { display: "none" } : {})}
    >
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
      <Box display={{ base: "none", md: "block" }} />
      <MenuLink to="/about">{t("about")}</MenuLink>
      <Spacer display={{ base: "none", md: "flex" }} />
      <HStack display={{ base: "none", md: "flex" }} alignItems="baseline">
        <DarkModeButton />
        <LanguageButton
          locale={locale}
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
