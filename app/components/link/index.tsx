import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RemixLink } from "@remix-run/react";
import type { ComponentProps } from "react";
import { forwardRef } from "react";

export const Link = forwardRef<
  HTMLAnchorElement,
  ComponentProps<typeof ChakraLink> & { to: string }
>(function Link({ to, ...props }, ref) {
  return (
    <ChakraLink
      ref={ref}
      textDecoration="underline"
      // eslint-disable-next-line react/display-name
      as={forwardRef<HTMLAnchorElement>((props, ref) => (
        <RemixLink {...props} to={to} ref={ref} />
      ))}
      {...props}
    />
  );
});
