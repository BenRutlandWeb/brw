<template>
  <component
    :is="is"
    class="
      button
      inline-flex
      gap-4
      items-center
      justify-center
      rounded
      leading-3
      px-4
      py-2
      border-2 border-transparent
      font-medium font-mono
      focus:outline-none
      focus-visible:ring
      transition
      ring-opacity-40
      focus:z-10
      disabled:opacity-30
      disabled:cursor-default
    "
    :class="colorClasses"
  >
    <slot name="before" />
    <span class="leading-6">
      <slot />
    </span>
    <slot name="after" />
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

<style scoped>
.button {
  min-width: 6rem;
}
</style>
