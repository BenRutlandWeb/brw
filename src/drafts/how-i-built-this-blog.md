---
name: How I built this blog
title: How I built this blog // Ben Rutland Web
description: The obligatory "how I built this blog" post that every good developer writes.
thumbnail: https://images.pexels.com/photos/5711903/pexels-photo-5711903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
tags: ["vue", "vite", "tailwindcss", "markdown", "git", "npm"]
layout: post
---

# How I built this blog

![Hello world!](https://images.pexels.com/photos/5711903/pexels-photo-5711903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)

## Development environment

I used [Vite](https://vitejs.dev/) as a dev environment. I chose Vite as I'm a big lover of Vue and it seemed the right fit for using the framework with minimal setup (Vite does support more than just Vue but I digress).

I used a load of vite plugins for various things such as [Markdown](/tags/markdown) pages, auto component imports, and layouts. It took a while to get it configured how I wanted it but it makes writing a simple blog really easy! 👍

## Front-end framework

As mentioned, I love using [Vue](https://vuejs.org/), I've been writing it for a few years now and, once I'd decided to go with a front-end site instead of WordPress or whatever, it was a no-brainer.

## Design

I am not a designer but I have picked up some things over the years, I have my own ideas for what I want from this site (and don't care if you don't like them!). I design in the browser as I find using a design tool takes me too long to iterate over ideas. I am using [Tailwind CSS](tailwindcss) to bring to life, the design in my head.

## Deployment

I deploy the site code to a GitHub repository. All new posts, changes to the design, everything, triggers a GitHub Action that builds the code and commits it to a `github-pages` branch.

## Hosting

I have a custom domain pointing to the GitHub server, with the respository configured to use GitHub Pages. It's pretty awesome having my version control, deployment, and hosting all managed with one workflow and dashboard.
