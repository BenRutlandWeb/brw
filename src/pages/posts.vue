<template>
    <Head>
        <title>Posts // Ben Rutland Web</title>
    </Head>

    <div class="content-wide pt-16 pb-32">
        <div class="max-w-prose mb-8">
            <h1 class="text-4xl font-extrabold mb-8">Posts</h1>
            <p class="text-lead">
                I'm not very good at writing blog posts so this page may be blank for a very long time... Or I may get
                the buzz for it and need to implement pagination.
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
    .filter((route) => Object.keys(route.meta).length !== 0 && route.path.includes("posts"))
    .sort((a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt));
</script>
