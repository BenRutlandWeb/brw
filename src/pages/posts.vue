<template>
  <Head>
    <title>Posts // Ben Rutland Web</title>
  </Head>

  <div class="content-wide pt-16 pb-32">
    <div class="prose mb-8">
      <h1 class="text-4xl font-bold mb-8">Posts</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
        doloremque libero accusamus dolorum similique deserunt dolore fugiat
        quos explicabo tenetur cum tempore exercitationem, ex illo quas nam ut
        vitae! Hic?
      </p>
    </div>

    <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
      <li v-for="post in posts" :key="post.path">
        <PostCard :post="post" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Head } from "@vueuse/head";
import { useRouter } from "vue-router";

const router = useRouter();

const routes = router.getRoutes();

const posts = routes
  .filter(
    (route) =>
      Object.keys(route.meta).length !== 0 && route.path.includes("posts")
  )
  .sort(
    (a, b) =>
      new Date(b.meta.fileStats.birthtime) -
      new Date(a.meta.fileStats.birthtime)
  );
</script>
