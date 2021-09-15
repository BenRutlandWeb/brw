<template>
  <a
    target="_blank"
    rel="external nofollow noreferrer noopener"
    class="
      text-gray-500
      leading-3
      block
      p-1
      transition
      rounded-full
      focus:outline-none
      focus:bg-gray-500 focus:bg-opacity-10
    "
  >
    <div class="sr-only">{{ label }}</div>
    <Icon :icon="icon" />
  </a>
</template>

<script setup>
const props = defineProps({
  icon: String,
  label: String,
  color: String,
});
</script>

<style>
a:focus,
a:hover {
  color: v-bind(color);
}
</style>