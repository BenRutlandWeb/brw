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

### Controllers

Instead of a `Closure`, we can use a dedicated `Controller` class. Using `wp-cli` we can use the Radiate command `make:controller`:

```bash
wp radiate make:controller HogwartsHouseController
```

This will create a controller located in `app/Http/Controllers`. We'll move the sorting logic into a method called `sort`. You can name the method as you please, but we'll keep it simple for the purposes of this example.

```php
<?php

namespace Plugin\Http\Controllers;

use Radiate\Routing\Controller;

class HogwartsHouseController extends Controller
{
    /**
     * Sort the user into a house.
     *
     * @return string
     */
    public function sort()
    {
        return collect(
            ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']
        )->random();
    }
}

```

Next, update the `routes/api.php` file to point the route to the newly created controller. Notice the second argument takes an array with the controller name and method name.

```php
<?php

use Plugin\Http\Controllers\HogwartsHouseController;
use Radiate\Support\Facades\Route;

Route::get('hogwarts/sort', [HogwartsHouseController::class, 'sort']);

```

The above code is great, but every time the endpoint is requested, a different house will be returned. Not very magical! Lets use the `Request` object combined with the `Option` facade to help us return the same house once a user is sorted.

```php
<?php

namespace Plugin\Http\Controllers;

use Radiate\Http\Request;
use Radiate\Routing\Controller;
use Radiate\Support\Facades\Option;
use Radiate\Support\Str;

class HogwartsHouseController extends Controller
{
    /**
     * Sort the user into a house.
     *
     * @param \Radiate\Http\Request $request
     * @return string
     */
    public function sort(Request $request)
    {
        $name = Str::snake('hp_' . $request->get('name'));

        if (Option::has($name)) {
            return Option::get($name);
        }

        $house = collect(
            ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']
        )->random();

        Option::set($name, $house);

        return $house;
    }
}

```

Here we are taking the value of "name" and using it as a key to store in the options table. Whenever the same name is passed to the request, the same house will be returned. There is one more thing we can do here to utilize the power of Radiate. Let's validate the input and bail early if the "name" field is not valid.

```php
<?php

public function sort(Request $request)
{
    $request->validate([
        'name' => 'required|string',
    ]);

    $name = Str::snake('hp_' . $request->get('name'));

    if (Option::has($name)) {
        return Option::get($name);
    }

    $house = collect(
        ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']
    )->random();

    Option::set($name, $house);

    return $house;
}

```
