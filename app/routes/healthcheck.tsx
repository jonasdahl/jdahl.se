import { json } from "@remix-run/node";
import { db } from "~/prisma.server";

export async function loader() {
  const postCount = await db.post.count();
  return json({ status: "ok", postCount });
}
