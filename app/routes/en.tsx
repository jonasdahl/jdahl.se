import { redirect } from "@remix-run/node";

export function loader() {
  return redirect("/?lng=en", { status: 301 });
}
