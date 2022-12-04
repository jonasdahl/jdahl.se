import { Tooltip } from "@chakra-ui/react";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkIconButton } from "../link-icon-button";

export function LanguageButton({ label, to }: { label: string; to: string }) {
  return (
    <Tooltip label={label}>
      <LinkIconButton
        to={to}
        aria-label={label}
        size="lg"
        p={3}
        variant="ghost"
        colorScheme="transparent"
      >
        <FontAwesomeIcon icon={faLanguage} />
      </LinkIconButton>
    </Tooltip>
  );
}
