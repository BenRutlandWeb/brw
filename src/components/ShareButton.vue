<template>
  <button
    type="button"
    @click="share"
    v-if="canShare"
    class="
      text-gray-500
      leading-3
      block
      p-1
      transition
      focus:outline-none
      focus:bg-gray-500 focus:bg-opacity-10
      focus:text-brand-blue
      hover:text-brand-blue
      ring-brand-blue ring-opacity-40
      rounded-full
    "
  >
    <Icon icon="share" />
  </button>
</template>

<script setup>
const canShare = navigator.share;

function share() {
  navigator.share({ url: window.location.href });
}
</script>
