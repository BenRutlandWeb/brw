<template>
    <footer class="bg-gray-100 container py-8 text-center">
        <div class="content-wide flex flex-wrap items-center justify-between gap-y-4 gap-x-6">
            <div class="flex flex-1 items-center gap-4 text-lg">
                <DoubleSlash class="text-gray-300" />
                <span class="whitespace-nowrap">{{ new Date().getFullYear() }} &copy; Ben Rutland Web</span>
            </div>

            <ul class="flex items-center justify-between gap-1 font-mono text-lg md:text-xl text-gray-500">
                <li>
                    <SocialLink href="https://radiate-framework.github.io/">
                        <div class="sr-only">Radiate documentation site</div>
                        <Icon icon="radiate" />
                    </SocialLink>
                </li>
                <li>
                    <SocialLink href="https://codepen.io/BenRutlandWeb">
                        <div class="sr-only">CodePen site</div>
                        <Icon icon="codepen" />
                    </SocialLink>
                </li>
                <li>
                    <SocialLink href="https://github.com/BenRutlandWeb">
                        <div class="sr-only">Github profile</div>
                        <Icon icon="github" />
                    </SocialLink>
                </li>
                <!--<li>
            <SocialLink href="https://www.facebook.com/benrutlandweb">
              <div class="sr-only">Facebook profile</div>
              <Icon icon="facebook" />
            </SocialLink>
          </li>-->
                <!--
                <li>
                    <SocialLink href="https://twitter.com/BenRutlandWeb">
                        <div class="sr-only">Twitter profile</div>
                        <Icon icon="twitter" />
                    </SocialLink>
                </li>
               <li>
            <SocialLink href="https://www.instagram.com/BenRutlandWeb">
              <div class="sr-only">Instagram profile</div>
              <Icon icon="instagram" />
            </SocialLink>
          </li>-->
                <li>
                    <SocialLink href="https://www.linkedin.com/in/benrutlandweb/">
                        <div class="sr-only">LinkedIn profile</div>
                        <Icon icon="linkedin" />
                    </SocialLink>
                </li>
            </ul>
            <IconButton is="a" href="#top" class="text-gray-500 focus-visible:ring-2 ring-gray-500 p-1">
                <Icon icon="arrow_upward" />
            </IconButton>
        </div>
    </footer>
</template>

<style scoped>
footer {
    grid-area: footer;
}
</style>
