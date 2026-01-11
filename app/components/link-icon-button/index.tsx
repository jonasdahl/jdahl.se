/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/anchor-has-content */
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
      as={forwardRef<HTMLAnchorElement>((props, ref) => (
        <Link {...props} to={to} ref={ref} />
      ))}
      {...props}
      aria-label={props["aria-label"] || "Icon"}
    />
  );
});
