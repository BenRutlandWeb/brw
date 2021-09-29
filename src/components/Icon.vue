<template>
  <svg class="fill-current inline-block w-6 h-6" aria-hidden="true">
    <use :xlink:href="url" />
  </svg>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const url = computed(() => `/icons.svg#${props.icon}`);
</script>