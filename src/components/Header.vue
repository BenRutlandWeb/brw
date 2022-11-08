<template>
  <header class="container sticky top-0 bg-brand-blue text-white py-2 z-50">
    <div class="content-wide">
      <slot />
    </div>
  </header>
</template>

<style>
html {
  --header-height: 3.5rem;
}
</style>

<style scoped>
header {
  grid-area: header;
  font-size: 1.5rem;
}
</style>
