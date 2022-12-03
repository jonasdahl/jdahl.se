import { IconButton } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { ComponentProps, forwardRef } from "react";

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
    />
  );
});
