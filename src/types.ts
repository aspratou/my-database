import type { CollectionEntry } from "astro:content";

export type SiteSettings = {};

export type ContentEntry =
  | CollectionEntry<"diary">
  | CollectionEntry<"book">
  | CollectionEntry<"game">
  | CollectionEntry<"english">;

export type AllContentEntry =
  | CollectionEntry<"diary">
  | CollectionEntry<"book">
  | CollectionEntry<"game">
  | CollectionEntry<"english">
  | CollectionEntry<"legal">;

export type ContentCollections = "diary" | "book" | "game" | "english" | "legal";

export interface PostMeta {
  plainText: string;
  readingTimeText: string;
}

export type WithMeta<T> = T & { meta: PostMeta };

export type ImageLoading = "eager" | "lazy" | null;
