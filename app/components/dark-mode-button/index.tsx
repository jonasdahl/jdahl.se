import { IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export function DarkModeButton() {
  const { t } = useTranslation(["translation"]);
  const { toggleColorMode } = useColorMode();

  return (
    <Tooltip label={t("toggle-dark-mode")}>
      <IconButton
        onClick={() => toggleColorMode()}
        aria-label={t("toggle-dark-mode")}
        size="lg"
        p={3}
        variant="ghost"
        colorScheme="transparent"
      >
        <FontAwesomeIcon icon={faMoon} />
      </IconButton>
    </Tooltip>
  );
}
