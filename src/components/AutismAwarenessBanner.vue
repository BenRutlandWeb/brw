<template>
  <aside
    class="
      container
      autism-awareness-day
      py-4
      bg-gradient-to-br
      from-autism-awareness-day-dark
      to-autism-awareness-day-light
      text-white
      shadow-lg
      z-10
    "
  >
    <div class="flex items-center justify-between gap-4 flex-wrap content-wide">
      <div>
        <h2 class="font-medium text-4xl leading-snug">Autism Awareness Day</h2>
        <p class="text-lg">
          Help create a society that works for autistic people.
        </p>
      </div>
      <ButtonLink
        href="https://www.autism.org.uk/"
        class="
          bg-autism-awareness-day-dark
          ring-autism-awareness-day-dark ring-opacity-40
          border-autism-awareness-day-dark
        "
        target="_blank"
        rel="external noopener nofollow noreferrer"
      >
        Transform lives
        <Icon icon="launch" />
      </ButtonLink>
    </div>
  </aside>
</template>

<style scoped>
aside {
  grid-area: banner;
}
</style>
