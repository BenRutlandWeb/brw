<template>
    <Head>
        <title>Ben Rutland Web</title>
    </Head>

    <div class="content-wide py-16">
        <div class="max-w-prose mb-8">
            <h1 class="text-4xl font-extrabold mb-8">Welcome to Ben Rutland Web</h1>
            <p class="text-lead mb-4">
                I'm a web developer for
                <a
                    href="https://www.10degrees.uk/"
                    class="external-link"
                    target="_blank"
                    rel="nofollow noopener noreferrer external"
                    >10 Degrees</a
                >, creator of the
                <a
                    href="https://radiate-framework.github.io/"
                    class="external-link"
                    target="_blank"
                    rel="nofollow noopener noreferrer external"
                    >Radiate</a
                >
                framework, and I <i>try</i> to write interesting things about web technologies, ideologies and more.
            </p>
            <p class="">
                In addition to web development I do other stuff like drawing and making music, some of which I will
                showcase on this site. Some of it I won't.
            </p>
        </div>
    </div>

    <div class="content-screen container py-16 mb-32 gap-y-8">
        <div class="border-b container content-screen">
            <div class="content-wide flex flex-wrap gap-4 justify-between items-center pb-4">
                <h2 class="text-4xl">Posts</h2>

                <Button is="RouterLink" :to="{ name: 'posts' }" class="bg-brand-green ring-brand-green text-brand-blue">
                    <DoubleSlash />
                    View all posts
                </Button>
            </div>
        </div>

        <ul class="content-wide grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <li v-for="post in posts" :key="post.path">
                <PostCard :post="post" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const routes = router.getRoutes();

const posts = routes
    .filter((route) => Object.keys(route.meta).length !== 0 && route.path.includes("posts"))
    .sort((a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt))
    .slice(0, 3);
</script>
