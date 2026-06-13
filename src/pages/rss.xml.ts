import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

import { SITE_SETTINGS } from "../site.config";

export async function GET(context: APIContext) {
  const diaryPosts = await getCollection("diary", ({ data }) => !data.draft);
  const books = await getCollection("book", ({ data }) => !data.draft);
  const games = await getCollection("game", ({ data }) => !data.draft);
  const english = await getCollection("english", ({ data }) => !data.draft);

  const allEntries = [...diaryPosts, ...books, ...games, ...english].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: SITE_SETTINGS.title,
    description: SITE_SETTINGS.description,
    site: context.site ?? "",
    items: allEntries.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.pubDate,
      description: entry.data.description,
      link: `/posts/${entry.id}/`,
      enclosure: {
        url: entry.data.image.src,
        type: "image/webp",
        length: 1,
      },
      ...(entry.data.tags.length > 0 && { categories: entry.data.tags }),
      author: "noreply@truedaniyyel.com (Daniel Adrian)",
    })),
    customData: `<language>en-us</language>`,
  });
}
