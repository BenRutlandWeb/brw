<template>
  <aside
    v-if="isEarthDay"
    class="
      banner
      container
      py-4
      bg-gradient-to-br
      from-earth-day-dark
      to-earth-day-light
      text-white
      shadow-lg
      z-10
    "
  >
    <div class="flex items-center justify-between gap-4 flex-wrap content-wide">
      <div>
        <h2 class="font-medium text-4xl leading-snug">Earth Day</h2>
        <p class="text-lg">Go green, protect the Earth.</p>
      </div>
      <ButtonLink
        href="https://www.earthday.org/"
        class="
          bg-earth-day-dark
          ring-earth-day-dark ring-opacity-40
          border-earth-day-dark
        "
        target="_blank"
        rel="external noopener nofollow noreferrer"
      >
        Get involved
        <Icon icon="launch" />
      </ButtonLink>
    </div>
  </aside>
</template>


<script setup>
import { isSame } from "@/helpers/time";
import { computed } from "@vue/reactivity";

const isEarthDay = computed(() => isSame(undefined, 4, 22));
</script>

<style scoped>
aside {
  grid-area: banner;
}
</style>
