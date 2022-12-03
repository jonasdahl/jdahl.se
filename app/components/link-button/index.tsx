import { Button } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { ComponentProps, forwardRef } from "react";

export function LinkButton({
  to,
  ...props
}: ComponentProps<typeof Button> & { to: string }) {
  return (
    <Button
      as={forwardRef<HTMLAnchorElement>((props, ref) => (
        <Link {...props} to={to} ref={ref} />
      ))}
      {...props}
    />
  );
}
