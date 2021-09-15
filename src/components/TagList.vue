<template>
  <ul class="text-gray-400 flex flex-wrap font-mono text-lg" v-if="tags.length">
    <li v-for="tag in selectedTags" :key="tag.name">
      <RouterLink
        :to="{ name: 'tags-tag', params: { tag: tag.path } }"
        class="
          text-gray-500
          hover:text-brand-blue
          hover:bg-brand-green
          focus:outline-none
          focus:text-brand-blue
          focus:bg-brand-green
          transition
          rounded
          px-0.5
        "
      >
        {{ tag.regex }}
      </RouterLink>
    </li>
  </ul>
</template>

<script setup>
import allTags from "@/api/tags";
import { computed } from "@vue/reactivity";

const props = defineProps({
  tags: Array,
});

const selectedTags = computed(() => {
  let tags = [];

  props.tags.forEach((tag) => {
    tag = allTags.find((t) => t.path === tag);
    if (tag) {
      tags.push(tag);
    }
  });

  return tags;
});
</script>

<style scoped>
ul::before {
  content: "/^(";
}
ul::after {
  content: ")$/i";
}
li + li::before {
  content: "|";
}
</style>
