import { getCollection, getEntry } from "astro:content";

export async function getTags() {
  return getCollection("tags");
}

export async function getTag(id: string | undefined) {
  if (!id) return undefined;
  return getEntry("tags", id);
}
