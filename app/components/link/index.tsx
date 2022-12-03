import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RemixLink } from "@remix-run/react";
import { ComponentProps, forwardRef } from "react";

export const Link = forwardRef<
  HTMLAnchorElement,
  ComponentProps<typeof ChakraLink> & { to: string }
>(function Link({ to, ...props }, ref) {
  return (
    <ChakraLink
      ref={ref}
      textDecoration="underline"
      as={forwardRef<HTMLAnchorElement>((props, ref) => (
        <RemixLink {...props} to={to} ref={ref} />
      ))}
      {...props}
    />
  );
});
