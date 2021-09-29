<template>
  <component
    :is="is"
    class="
      block
      rounded
      leading-3
      p-2
      focus:outline-none
      focus-visible:ring-6
      transition
      ring-opacity-40
      focus:z-10
      disabled:opacity-30
      disabled:cursor-default
    "
    :class="colorClasses"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  is: { default: "button" },
  color: { type: String },
});

const colorClasses = [
  props.color === "green"
    ? "text-brand-blue bg-brand-green ring-brand-green"
    : "",
  props.color === "pink" ? "text-brand-blue bg-brand-pink ring-brand-pink" : "",
];
</script>
