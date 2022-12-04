import { Box } from "@chakra-ui/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { TopBar } from "~/components/top-bar";
import i18next from "~/i18next.server";

export async function loader({ request }: LoaderArgs) {
  const locale = await i18next.getLocale(request);
  return json({ locale });
}

export default function Detailed() {
  const { locale } = useLoaderData<typeof loader>();

  return (
    <Box>
      <TopBar locale={locale} />
      <Outlet />
    </Box>
  );
}
