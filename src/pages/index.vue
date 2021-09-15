<template>
  <Head>
    <title>Ben Rutland Web</title>
  </Head>

  <div class="content-wide my-16">
    <h1 class="text-4xl font-medium mb-2">Welcome to Ben Rutland Web</h1>
    <div class="prose">
      <p>
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
        <RouterLink
          :to="{ name: 'posts' }"
          class="
            inline-flex
            items-center
            gap-3
            transition
            relative
            z-0
            text-center
            rounded
            py-2
            px-4
            border-2
            font-mono font-medium
            focus:outline-none
            focus:ring-6
            hover:ring-6
            bg-brand-green
            ring-brand-green ring-opacity-40
            border-brand-green
          "
        >
          <DoubleSlash />
          View all posts
        </RouterLink>
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
    <div class="prose">
      <p>
        Here is a selection of posts about Radiate, a PHP framework I created to
        make WordPress themes and plugins development a joy. Heavily inspired by
        Laravel, it uses WordPress core functionality underneath elegant OOP
        classes.
      </p>
    </div>
  </div>

  <!--<FeaturedPostCard
    :post="$router.resolve({ name: 'posts-getting-started-with-radiate' })"
    class="mb-16 content-wide"
    dir="rtl"
  />-->

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
