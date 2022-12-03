import { Image, Tooltip } from "@chakra-ui/react";
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
      >
        <Image src={flag} height="100%" style={{ aspectRatio: 1 }} />
      </LinkIconButton>
    </Tooltip>
  );
}
