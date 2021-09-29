<template>
  <RouterLink :to="post" class="grid gap-4">
    <img
      :src="post.meta.thumbnail"
      :alt="post.meta.name"
      class="w-full aspect-w-3 aspect-h-2 block object-cover rounded"
    />
    <div class="mb-8">
      <PostMeta :post="post" />
      <h3 class="text-2xl mt-2">{{ post.meta.name }}</h3>
    </div>
  </RouterLink>
</template>

<script setup>
const props = defineProps(["post"]);
</script>