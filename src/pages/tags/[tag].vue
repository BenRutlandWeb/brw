<template>
  <div class="content-wide pt-16 pb-32">
    <div class="max-w-prose mb-8">
      <h1 class="text-4xl font-extrabold mb-8">{{ selectedTag.name }}</h1>
      <p v-if="selectedTag.description" class="text-lead">
        {{ selectedTag.description }}
      </p>
    </div>

    <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
      <li v-for="post in posts" :key="post.path">
        <PostCard :post="post" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import allTags from "@/api/tags";
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";

const props = defineProps({
  tag: String,
});

const selectedTag = computed(() =>
  allTags.find((tag) => props.tag === tag.path)
);

const router = useRouter();

const routes = router.getRoutes();

const posts = routes
  .filter(
    (route) =>
      Object.keys(route.meta).length !== 0 && route.path.includes("posts")
  )
  .filter((route) => route.meta.tags?.includes(props.tag))
  .sort(
    (a, b) =>
      new Date(b.meta.fileStats.birthtime) -
      new Date(a.meta.fileStats.birthtime)
  );
</script>
