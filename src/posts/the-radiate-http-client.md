---
name: The Radiate HTTP client
title: The Radiate HTTP client // Ben Rutland Web
description:
thumbnail: /brw/img/radiate-http-client.png
tags: ["radiate", "wordpress", "php", "http"]
layout: post
---

# The Radiate HTTP client

::: lead
Make API calls from your application with the Radiate `Http` facade.
:::

![Radiate HTTP client code](/img/radiate-http-client.png)

The Radiate HTTP client is an elegant wrapper around `wp_remote_request`, with useful methods t obuild the HTTP request, and returning a fluent response interface.

```php
<?php

use Radiate\Support\Facades\Http;

$client = Http::baseUrl('https://api.example.com')
    ->asJson()
    ->acceptJson();

$response = $client->get('users');

if ($response->ok()) {
    $users = $response->collect();
}

```

## Concurrent requests

Like Laravel, you can make concurrent requests which will run at the same time. Think of concurrent requests as asyncronous.

```php
<?php

use Radiate\Http\Client\Pool;
use Radiate\Support\Facades\Http;

$responses = Http::pool(function (Pool $pool) {
    $pool->as('first')->get('https://api.example.com/first'),
    $pool->as('second')->get('https://api.example.com/second'),
    $pool->as('third')->get('https://api.example.com/third'),
});

return [
    $responses['first']->ok(),
    $responses['second']->ok(),
    $responses['third']->ok(),
];

```
