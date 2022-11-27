import fontAwesomeStyles from "@fortawesome/fontawesome-svg-core/styles.css";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jonas Dahl",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: fontAwesomeStyles }];
};

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
        <script src="https://use.fontawesome.com/196102e831.js" />
        <script
          defer
          data-domain="jdahl.se"
          src="https://plausible.addem.se/js/plausible.js"
        ></script>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
