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
        framework, and I <i>try</i> to write interesting things about web
        technologies, ideologies and more.
      </p>
      <p class="">
        In addition to web development I do other stuff like drawing and making
        music, some of which I will showcase on this site. Some of it I won't.
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

  <div class="content-screen container py-16 mb-32 gap-y-8">
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
        <h2 class="text-4xl">WordPress</h2>

        <Button
          is="RouterLink"
          :to="{ name: 'tags-tag', params: { tag: 'wordpress' } }"
          class="bg-brands-wordpress ring-brands-wordpress text-white"
        >
          <DoubleSlash />
          View all WordPress posts
        </Button>
      </div>
    </div>

    <ul class="content-wide grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      <li>
        <PostCard
          :post="
            $router.resolve({
              name: 'posts-enhanced-wordpress-requests-and-responses',
            })
          "
        />
      </li>
    </ul>
  </div>

  <div class="content-screen container py-16 mb-32 gap-y-8">
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
        <h2 class="text-4xl">Laravel</h2>

        <Button
          is="RouterLink"
          :to="{ name: 'tags-tag', params: { tag: 'laravel' } }"
          class="bg-brands-laravel ring-brands-laravel text-white"
        >
          <DoubleSlash />
          View all Laravel posts
        </Button>
      </div>
    </div>

    <ul class="content-wide grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      <li>
        <PostCard
          :post="
            $router.resolve({
              name: 'posts-how-i-built-this-blog',
            })
          "
        />
      </li>
    </ul>
  </div>
</template>