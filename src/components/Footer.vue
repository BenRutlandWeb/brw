<template>
  <footer class="bg-gray-100 container py-8 text-center">
    <div
      class="
        content-wide
        flex flex-wrap
        items-center
        justify-between
        gap-y-4 gap-x-12
      "
    >
      <div class="flex flex-1 items-center gap-4 text-lg">
        <DoubleSlash class="opacity-40" />
        <span class="whitespace-nowrap"
          >{{ new Date().getFullYear() }} &copy; Ben Rutland Web</span
        >
      </div>
      <nav class="">
        <ul
          class="
            flex
            items-center
            justify-between
            gap-4
            font-mono
            text-lg
            md:text-xl
            text-gray-500
          "
        >
          <li>
            <SocialLink
              href="https://benrutlandweb.co.uk"
              label="WordPress site"
              icon="wordpress"
              color="#21759b"
            />
          </li>
          <li>
            <SocialLink
              href="https://github.com/BenRutlandWeb"
              label="Github profile"
              icon="github"
              color="#333"
            />
          </li>
          <li>
            <SocialLink
              href="https://www.facebook.com/benrutlandweb"
              label="Facebook profile"
              icon="facebook"
              color="#1877f2"
            />
          </li>
          <li>
            <SocialLink
              href="https://twitter.com/BenRutlandWeb"
              label="Twitter profile"
              icon="twitter"
              color="#1da1f2"
            />
          </li>
          <li>
            <SocialLink
              href="https://www.instagram.com/BenRutlandWeb"
              label="Instagram profile"
              icon="instagram"
              color="#e1306c"
            />
          </li>
          <li>
            <SocialLink
              href="https://www.linkedin.com/in/benrutlandweb/"
              label="LinkedIn profile"
              icon="linkedin"
              color="#0077b5"
            />
          </li>
        </ul>
      </nav>
      <ToTop />
    </div>
  </footer>
</template>


<style scoped>
footer {
  grid-area: footer;
}
</style>
