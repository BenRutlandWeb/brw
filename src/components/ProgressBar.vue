<template>
  <div
    class="sticky z-10 h-1 bg-brand-green transition-transform duration-75"
  ></div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { throttle } from "lodash-es";

const progress = ref(0);

window.addEventListener(
  "scroll",
  throttle(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    progress.value = Math.round(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
  }, 16),
  false
);
</script>

<style scoped>
div {
  top: var(--header-height);
  transform: scaleX(calc(v-bind(progress) * 1%));
  transform-origin: left;
  will-change: transform;
}
</style>