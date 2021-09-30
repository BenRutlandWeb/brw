<template>
  <div>
    <Head>
      <title>Page not found // Ben Rutland Web</title>
    </Head>

    <div class="content-wide my-16">
      <h1 class="text-4xl font-medium mb-4">404: Page not found.</h1>
      <p class="mb-4">The page you were looking for was not found.</p>

      <Button
        is="RouterLink"
        :to="{ name: 'index' }"
        class="bg-brand-green ring-brand-green text-brand-blue"
      >
        <DoubleSlash />
        Go home
      </Button>

      <pre class="whitespace-pre-wrap mt-8 border rounded p-4">{{
        message
      }}</pre>
    </div>
  </div>
</template>

<script setup>
import { Head } from "@vueuse/head";
import { sample } from "lodash-es";

const markdown = `HTTP/1.1 404 Not Found
Content-Type: text/plain; charset=UTF-8

# 404: Page Not Found.

The page you were looking for was not found.

[Go home](/)
`;

const html = `HTTP/1.1 404 Not Found
Content-Type: text/html; charset=UTF-8

<h1>404: Page Not Found.</h1>
<p>The page you were looking for was not found.</p>
<p>
    <a href="/">Go home</a>
</p>
`;

const json = `HTTP/1.1 404 Not Found
Content-Type: application/json; charset=UTF-8

{"error":{"status":404,"message":"Not found"},"content":{"title":"404: Page Not Found.","message":"The page you were looking for was not found.","action":{"url":"/","text":"Go home"}}}
`;

const javascript = `HTTP/1.1 404 Not Found
Content-Type: application/javascript; charset=UTF-8

const content = {
  title: "404: Page Not Found.",
  message: "The page you were looking for was not found.",
  action: {
    url: "/",
    text: "Go home"
  }
};

const  { title, message, action } = content

const template = \`
<h1>\${title}</h1>
<p>\${message}</p>
<p>
    <a href="\${action.url}">\${action.text}</a>
</p>
\`;

document.body.innerHTML = template;
`;

const message = sample([markdown, html, json, javascript]);
</script>



