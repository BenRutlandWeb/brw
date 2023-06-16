<template>
    <RouterLink :to="post" class="grid gap-4">
        <img
            v-if="post.meta.thumbnail"
            :src="post.meta.thumbnail"
            :alt="post.meta.name"
            class="w-full aspect-w-3 aspect-h-2 block object-cover rounded"
        />
        <div
            v-else
            class="grid place-items-center aspect-w-3 aspect-h-2 text-8xl rounded bg-gray-100 text-gray-300"
        >
            <DoubleSlash />
        </div>
        <div class="mb-8">
            <PostMeta :post="post" />
            <h3 class="text-2xl mt-2">{{ post.meta.name }}</h3>
        </div>
    </RouterLink>
</template>

<script setup>
const props = defineProps(["post"]);
</script>
