import { getCollection } from "astro:content";
import readingTime from "reading-time";

export async function getSortedPosts() {
  const posts = await getCollection("posts");

  return posts
    .map((post) => ({
      ...post,
      href: `/posts/${post.id}`,
      meta: {
        name: post.data.name,
        thumbnail: post.data.thumbnail,
        createdAt: post.data.createdAt,
        tags: post.data.tags,
        stats: readingTime(post.body),
      },
    }))
    .sort((a, b) => b.data.createdAt.getTime() - a.data.createdAt.getTime());
}
