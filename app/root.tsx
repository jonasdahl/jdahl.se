import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import fontAwesomeStyles from "@fortawesome/fontawesome-svg-core/styles.css";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";
import i18next from "./i18next.server";
import { theme } from "./theme";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jonas Dahl",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: fontAwesomeStyles },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Arvo&family=Roboto",
    },
  ];
};

export let loader = async ({ request }: LoaderArgs) => {
  let locale = await i18next.getLocale(request);
  return json({ locale });
};

export let handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "translation",
};

export default function App() {
  let { locale } = useLoaderData<typeof loader>();

  let { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
        <script
          defer
          data-domain="jdahl.se"
          src="https://plausible.addem.se/js/plausible.js"
        ></script>
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Outlet />
          <ColorModeScript />
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
