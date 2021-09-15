<template>
  <div class="flex flex-wrap gap-x-4 gap-y-1 text-sm font-mono text-gray-400">
    <time class="">Posted {{ createdDate }} ago</time>
    <DoubleSlash class="opacity-40" />
    <span>{{ post.meta.stats.text }}</span>
  </div>
</template>

<script setup>
import { humanDiff } from "@/helpers/time.js";

const props = defineProps(["post"]);

const createdDate = humanDiff(new Date(props.post.meta.fileStats.birthtime));
</script>