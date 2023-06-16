<template>
  <Head>
    <title>Ben Rutland Web</title>
  </Head>

  <div class="content-wide py-16">
    <div class="max-w-prose mb-8">
      <h1 class="text-4xl font-extrabold mb-8">Welcome to Ben Rutland Web</h1>
      <p class="text-lead mb-4">
        I'm a full-stack web developer with 10+ years experience in WordPress and Laravel.
      </p>
      <p class="">
        I currently work for <a href="https://10degrees.uk" class="external-link" target="_blank"
           rel="nofollow noopener noreferrer external">10 Degrees</a>, a web agency building websites and applications
        across multiple sectors including recruitment and higher education.
      </p>
    </div>
  </div>

  <div class="content-screen container bg-gray-100 py-8 mb-32 gap-y-8">
    <div class="border-b container content-screen pb-8">
      <div class="content-wide">

        <h2 class="text-4xl mb-2">Posts</h2>
        <div class="max-w-prose">
          <p class="mb-4">
            I'm not a blogger or writer, but occasionally I get the urge to write down some thoughts so I put them here.
          </p>
          <Button is="RouterLink" :to="{ name: 'posts' }" class="bg-brand-green ring-brand-green text-brand-blue">
            <DoubleSlash />
            View all posts
          </Button>
        </div>
      </div>
    </div>

    <FeaturedPostCard :post="$router.resolve({ name: 'posts-acf-field-group-builder' })" class="content-wide" />

    <ul class="content-wide grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      <li>
        <PostCard :post="$router.resolve({ name: 'posts-autocomplete-attribute' })" />
      </li>
      <li>
        <PostCard :post="$router.resolve({ name: 'posts-enhanced-wordpress-requests-and-responses' })" />
      </li>
      <li>
        <PostCard :post="$router.resolve({ name: 'posts-using-the-has-relationship-selector' })" />
      </li>
    </ul>
  </div>
  <!--
  <div class="content-wide mb-8">
    <h2 class="text-4xl mb-2">Radiate framework</h2>
    <div class="max-w-prose">
      <p>
        Here is a selection of posts about Radiate, a PHP framework I created to
        make WordPress theme and plugin development a joy. Heavily inspired by
        Laravel, it uses WordPress core functionality underneath elegant OOP
        classes.
      </p>
      <Button is="RouterLink" :to="{ name: 'tags-tag', params: { tag: 'radiate' } }" class="
          !no-underline
          bg-radiate-black
          ring-radiate-black
          text-radiate-yellow
          mt-4
        ">
        <DoubleSlash />
        View all
      </Button>
    </div>
  </div>

  <p>
    <mark>write a good intro to radiate post, then remove the others until they are
      better written with a point to them</mark>
  </p>

  <ul class="mb-32 content-wide grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    <li>
      <PostCard :post="$router.resolve({ name: 'posts-getting-started-with-radiate' })" />
    </li>
    <li>
      <PostCard :post="$router.resolve({ name: 'posts-the-radiate-http-client' })" />
    </li>
    <li>
      <PostCard :post="$router.resolve({ name: 'posts-ajax-routes-with-radiate' })" />
    </li>
  </ul>

-->
</template>

<script setup>
import { Head } from "@vueuse/head";
</script>
