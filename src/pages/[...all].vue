<template>
  <div class="content-screen container">
    <Head>
      <title>Page not found // Ben Rutland Web</title>
    </Head>

    <div class="content-wide py-16">
      <div class="max-w-prose mb-8">
        <h1 class="text-4xl font-extrabold mb-8">404: Page not found.</h1>
        <p class="text-lead mb-4">
          The page you were looking for was not found.
        </p>
        <Button
          is="RouterLink"
          :to="{ name: 'index' }"
          class="bg-brand-green ring-brand-green text-brand-blue"
        >
          <DoubleSlash />
          Go home
        </Button>
      </div>

      <div class="flex justify-end gap-1 mb-2">
        <IconButton
          @click="choose(html)"
          class="text-gray-500 focus-visible:ring-2 ring-gray-500 p-1"
          :class="{ 'text-brand-green': message === html }"
        >
          <Icon icon="code" />
        </IconButton>
        <IconButton
          @click="choose(markdown)"
          class="text-gray-500 focus-visible:ring-2 ring-gray-500 p-1"
          :class="{ 'text-brand-green': message === markdown }"
        >
          <Icon icon="tag" />
        </IconButton>
        <IconButton
          @click="choose(json)"
          class="text-gray-500 focus-visible:ring-2 ring-gray-500 p-1"
          :class="{ 'text-brand-green': message === json }"
        >
          <Icon icon="data_object" />
        </IconButton>
        <IconButton
          @click="choose(javascript)"
          class="text-gray-500 focus-visible:ring-2 ring-gray-500 p-1"
          :class="{ 'text-brand-green': message === javascript }"
        >
          <Icon icon="data_array" />
        </IconButton>
      </div>
      <pre class="whitespace-pre-wrap rounded p-4 bg-gray-50">{{
        message
      }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
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

const message = ref(null);

const messages = [markdown, html, json, javascript];

message.value = sample(messages);

function choose(type) {
  message.value = type;
}
</script>



