<template>
  <aside
    v-if="isInternationalWomensDay"
    class="
      container
      py-4
      bg-gradient-to-br
      from-international-womens-day-dark
      to-international-womens-day-light
      text-white
      shadow-lg
      z-10
    "
  >
    <div class="flex items-center justify-between gap-4 flex-wrap content-wide">
      <div>
        <h2 class="font-medium text-4xl leading-snug">
          International Women's Day
        </h2>
        <p class="text-lg">
          Celebrate women's achievement. Raise awareness against bias. Take
          action for equality.
        </p>
      </div>
      <ButtonLink
        href="https://www.internationalwomensday.com/"
        class="
          bg-international-womens-day-dark
          ring-international-womens-day-dark ring-opacity-40
          border-international-womens-day-dark
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

const isInternationalWomensDay = computed(() => isSame(undefined, 3, 8));
</script>

<style scoped>
aside {
  grid-area: banner;
}
</style>
