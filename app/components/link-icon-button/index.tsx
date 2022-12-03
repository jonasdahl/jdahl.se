import { IconButton } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import type { ComponentProps } from "react";
import { forwardRef } from "react";

export const LinkIconButton = forwardRef<
  HTMLButtonElement,
  ComponentProps<typeof IconButton> & { to: string }
>(function LinkIconButton({ to, ...props }, ref) {
  return (
    <IconButton
      ref={ref}
      // eslint-disable-next-line react/display-name
      as={forwardRef<HTMLAnchorElement>((props, ref) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <Link {...props} to={to} ref={ref} />
      ))}
      {...props}
    />
  );
});
