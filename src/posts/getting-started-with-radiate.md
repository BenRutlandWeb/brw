---
name: Getting started with Radiate
title: Getting started with Radiate // Ben Rutland Web
description: A quick guide to getting started with Radiate - a WordPress plugin and theme framework inspired by Laravel.
thumbnail: https://radiate-framework.github.io/social-preview.png
tags: ["radiate", "php", "wordpress"]
layout: post
---

# Getting started with Radiate

::: lead
A quick guide to getting started with Radiate - a WordPress plugin/theme framework inspired by Laravel.
:::

![Radiate logo](https://radiate-framework.github.io/social-preview.png)

Radiate is a framework I built for WordPress, heavily inspired by Laravel. All the APIs available are built around core WordPress functionality, but with nice OOP syntax to make the development experience similar to Laravel.

In this article, I will guide you through making a simple API that uses some of the functionality from the framework. As a massive Harry Potter fan, Let's create a HP API.

## Installation

Radiate installs with composer. Navigate to the plugin/theme directory of your WordPress installation and run the following command:

```bash
composer create-project radiate/plugin harry-potter-api
```

This will create a new plugin called `harry-potter-api`. In this directory, you will find everything you need to get started with the `Radiate` framework.

## API Routing

By default, Radiate uses the `api` namespace for REST endpoints. We can change that by updating the `namespace` method in the `App\Providers\RouteServiceProvider` class. Let's namespace all the Harry Potter routes with "hp".

```php
public function mapApiRoutes()
{
    Route::namespace('hp') // changed from "api"
        ->middleware('api')
        ->group($this->app->basePath('routes/api.php'));
}

```

Now, lets create an API route. When a Witch or Wizard first arrives at Hogwarts, they get sorted into a house. Let's do that.

In your `routes/api.php` file, create a route called "hogwarts/sort". For now, we'll return a random house:

```php
<?php

use Radiate\Support\Facades\Route;

Route::get('hogwarts/sort', function () {
    return collect(
        ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']
    )->random();
});

```

Now go to the WordPress API endpoint `/wp-json/hp/hogwarts/sort`. You should see the response as a random house!

Instead of a `Closure`, we can use a dedicated `Controller` class. Using `wp-cli` we can use the Radiate command `make:controller`:

```bash
wp radiate make:controller HogwartsHouseController
```
