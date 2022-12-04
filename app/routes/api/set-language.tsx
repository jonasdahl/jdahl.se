import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import i18next from "~/i18next.server";
import { i18nCookie } from "~/sessions/i18n.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const locale = formData.get("locale") || (await i18next.getLocale(request));
  return json(
    { locale },
    { headers: { "Set-Cookie": await i18nCookie.serialize(locale) } }
  );
}
