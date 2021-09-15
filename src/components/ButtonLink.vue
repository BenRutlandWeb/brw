<template>
  <a
    class="
      inline-flex
      items-center
      gap-3
      transition
      relative
      z-0
      text-center
      rounded
      py-2
      px-4
      border-2
      font-mono font-medium
      focus:outline-none
      focus:ring-6
      hover:ring-6
    "
  >
    <DoubleSlash />
    <slot />
  </a>
</template>