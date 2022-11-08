<template>
  <Header>
    <div class="flex items-center justify-between gap-4 md:gap-6">
      <RouterLink
        :to="{ name: 'index' }"
        class="flex items-center gap-4 text-xl h-10"
      >
        <DoubleSlash class="opacity-40" />
        <span class="whitespace-nowrap">Ben Rutland Web</span>
      </RouterLink>
    </div>
  </Header>
  <Main>
    <div class="content-wide py-16">
      <div class="max-w-prose mb-8">
        <h1 class="text-4xl font-extrabold mb-8">Welcome to Ben Rutland Web</h1>
        <p class="text-lead mb-4">
          This site is under construction. Please come back soon!
        </p>
      </div>
    </div>
  </Main>
  <Footer />
</template>

<style>
html {
  scroll-padding-block-start: calc(var(--header-height) + 1.5rem);
  scroll-behavior: smooth;
}

#app {
  min-height: 100vh;
  display: grid;
  grid:
    "banner" auto
    "header" auto
    "main" 1fr
    "footer" auto / auto;
}
</style>
