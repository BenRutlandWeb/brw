<template>
  <RouterLink
    :to="post"
    class="grid grid-flow-row-dense items-center md:grid-cols-2 gap-8"
  >
    <img
      :src="post.meta.thumbnail"
      :alt="post.meta.name"
      class="w-full block object-cover rounded-lg aspect-w-3 aspect-h-2"
      :class="dir !== 'ltr' ? 'md:col-start-2' : ''"
    />
    <div class="mb-8">
      <PostMeta :post="post" />
      <h3 class="text-4xl mt-2">{{ post.meta.name }}</h3>
      <p class="text-xl mt-2">{{ post.meta.description }}</p>
    </div>
  </RouterLink>
</template>

<script setup>
const props = defineProps({
  post: Object,
  dir: { type: String, default: "ltr" },
});
</script>