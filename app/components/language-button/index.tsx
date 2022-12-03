import { Tooltip } from "@chakra-ui/react";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkIconButton } from "../link-icon-button";

export function LanguageButton({
  flag,
  label,
  to,
}: {
  flag: string;
  label: string;
  to: string;
}) {
  return (
    <Tooltip label={label} placement="right">
      <LinkIconButton
        to={to}
        aria-label={label}
        size="lg"
        p={3}
        variant="ghost"
        colorScheme="transparent"
        position="fixed"
        color="white"
      >
        <FontAwesomeIcon icon={faLanguage} />
      </LinkIconButton>
    </Tooltip>
  );
}
