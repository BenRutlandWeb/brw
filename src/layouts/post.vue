<template>
  <ProgressBar class="content-screen bg-brand-green" />
  <div class="content-screen container border-b py-8">
    <div class="grid gap-4">
      <!--<ShareButton class="justify-self-start" />-->
      <TagList :tags="$route.meta.tags ?? []" class="" />
      <PostMeta :post="$route" />
    </div>
  </div>
  <RouterView />
</template>