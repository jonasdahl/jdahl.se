import {
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetcher } from "@remix-run/react";
import { forwardRef } from "react";

export function LanguageButton({
  label,
  locale,
}: {
  label: string;
  locale: string;
}) {
  const fetcher = useFetcher();
  return (
    <Menu>
      <MenuButton
        // eslint-disable-next-line react/display-name
        as={forwardRef<HTMLButtonElement>((props, ref) => (
          <IconButton
            ref={ref}
            aria-label={label}
            size="lg"
            p={3}
            variant="ghost"
            colorScheme="transparent"
            {...props}
          >
            <FontAwesomeIcon icon={faLanguage} />
          </IconButton>
        ))}
      />
      <MenuList>
        <MenuOptionGroup
          type="radio"
          value={locale}
          onChange={(value) =>
            fetcher.submit(
              { locale: value as string },
              { method: "post", action: "/api/set-language" }
            )
          }
        >
          <MenuItemOption value="sv">Svenska</MenuItemOption>
          <MenuItemOption value="en">English</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
