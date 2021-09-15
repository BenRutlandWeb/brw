<template>
  <RouterLink
    class="
      text-white text-opacity-40
      leading-3
      block
      p-1
      transition
      focus:outline-none
      focus:bg-white focus:bg-opacity-10
      focus:text-opacity-100
      hover:text-opacity-100
      ring-white ring-opacity-40
      rounded-full
    "
    active-class="text-brand-green text-opacity-100"
  >
    <slot />
  </RouterLink>
</template>