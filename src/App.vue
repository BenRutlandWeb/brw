<template>
  <!--<InternationalWomensDayBanner />-->
  <AutismAwarenessBanner />
  <Header>
    <div class="flex items-center justify-between gap-4 md:gap-6">
      <div class="flex items-center gap-4 text-xl">
        <DoubleSlash class="opacity-40" />
        <span class="whitespace-nowrap">Ben Rutland Web</span>
      </div>
      <nav class="">
        <ul class="flex items-center gap-4 font-mono text-lg md:text-xl">
          <li class="">
            <MenuLink :to="{ name: 'index' }">
              <Icon icon="home" />
            </MenuLink>
          </li>
          <li class="">
            <MenuLink :to="{ name: 'posts' }">
              <Icon icon="notes" />
            </MenuLink>
          </li>
          <li class="">
            <MenuLink :to="{ name: 'bookmarks' }">
              <Icon icon="bookmark" />
            </MenuLink>
          </li>
        </ul>
      </nav>
    </div>
  </Header>
  <Main>
    <RouterView />
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