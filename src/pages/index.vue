<template>
  <Head>
    <title>Ben Rutland Web</title>
  </Head>

  <div class="content-wide py-16">
    <div class="max-w-prose mb-8">
      <h1 class="text-4xl font-extrabold mb-8">Welcome to Ben Rutland Web</h1>
      <p class="text-lead mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nihil
        natus, veritatis quisquam dignissimos ex itaque inventore veniam quae.
      </p>
      <p class="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic nihil
        natus, veritatis quisquam dignissimos ex itaque inventore veniam quae
        voluptatibus nulla. Eum quae et aliquam quos voluptatibus at, quas
        quisquam!
      </p>
    </div>
  </div>

  <div class="content-screen container bg-gray-100 py-16 mb-32 gap-y-8">
    <div class="border-b container content-screen">
      <div
        class="
          content-wide
          flex flex-wrap
          gap-4
          justify-between
          items-center
          pb-4
        "
      >
        <h2 class="text-4xl">Featured posts</h2>

        <Button
          is="RouterLink"
          :to="{ name: 'posts' }"
          class="bg-brand-green ring-brand-green text-brand-blue"
        >
          <DoubleSlash />
          View all posts
        </Button>
      </div>
    </div>

    <FeaturedPostCard
      :post="$router.resolve({ name: 'posts-autism-awareness-day' })"
      class="content-wide"
    />

    <ul class="content-wide grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      <li>
        <PostCard
          :post="$router.resolve({ name: 'posts-autocomplete-attribute' })"
        />
      </li>
      <li>
        <PostCard
          :post="$router.resolve({ name: 'posts-how-i-built-this-blog' })"
        />
      </li>
      <li>
        <PostCard :post="$router.resolve({ name: 'posts-hello-world' })" />
      </li>
    </ul>
  </div>

  <div class="content-wide mb-8">
    <h2 class="text-4xl mb-2">Radiate framework</h2>
    <div class="max-w-prose">
      <p>
        Here is a selection of posts about Radiate, a PHP framework I created to
        make WordPress themes and plugins development a joy. Heavily inspired by
        Laravel, it uses WordPress core functionality underneath elegant OOP
        classes.
      </p>
      <Button
        is="RouterLink"
        :to="{ name: 'tags-tag', params: { tag: 'radiate' } }"
        class="
          !no-underline
          bg-radiate-black
          ring-radiate-black
          text-radiate-yellow
          mt-4
        "
      >
        <DoubleSlash />
        View all
      </Button>
    </div>
  </div>

  <ul class="mb-32 content-wide grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    <li>
      <PostCard
        :post="$router.resolve({ name: 'posts-getting-started-with-radiate' })"
      />
    </li>
    <li>
      <PostCard
        :post="$router.resolve({ name: 'posts-the-radiate-http-client' })"
      />
    </li>
    <li>
      <PostCard
        :post="$router.resolve({ name: 'posts-ajax-routes-with-radiate' })"
      />
    </li>
  </ul>
</template>

<script setup>
import { Head } from "@vueuse/head";
</script>
