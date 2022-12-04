import { Tooltip } from "@chakra-ui/react";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { LinkIconButton } from "../link-icon-button";

export function DarkModeButton() {
  const { t } = useTranslation(["translation"]);
  return (
    <Tooltip label={t("toggle-dark-mode")} placement="right">
      <LinkIconButton
        to="."
        aria-label={t("toggle-dark-mode")}
        size="lg"
        p={3}
        variant="ghost"
        colorScheme="transparent"
      >
        <FontAwesomeIcon icon={faMoon} />
      </LinkIconButton>
    </Tooltip>
  );
}
