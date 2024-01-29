---
name: Enhanced WordPress REST Requests and Responses
title: Enhanced WordPress REST Requests and Responses // Ben Rutland Web
description: How to extend WordPress Request and Response objects
thumbnail: /img/wp-rest-api.png
tags: ["php", "wordpress"]
layout: post
---

# Enhanced WordPress REST Requests and Responses

::: lead
How to extend WordPress Request and Response objects.
:::

![Enhanced WordPress REST Requests and Responses](/img/wp-rest-api.png)

Why extend the [`WP_REST_Request`](https://developer.wordpress.org/reference/classes/wp_rest_request/) and [`WP_REST_Response`](https://developer.wordpress.org/reference/classes/wp_rest_response/) classes?

I am not a fan of WordPress' coding standards\* with snake-cased methods and properties. I also like to use strict typing to make my code more reliable and simpler to debug.

By extending these core classes, we can use type hints, camel-casing and even add nice helper methods and still benefit from the parent class implementation within the REST API.

<small>\* This is my personal opinion, feel free to use whatever coding standard you prefer.</small>

---

Firstly let's discuss what we want from our `Request` and `Response` objects.

## Request

-   Ways to interact with the request inputs: `get`, `boolean`, `has`
-   The ability to validate the request

```php
<?php

$request = new Request();

$request->get('email');
$request->boolean('remember');
$request->has('password');

$request->hasHeader('content-type');
```

## Response

-   A simple way to return content, status codes and headers
-   The ability to automatically convert content to the desired format

```php
<?php

$response = new Response('Unauthorized.');

$response->setStatus(403);

return $response;
```

I cannot stand WordPress' coding standards, in particular snake-cased methods and properties. We'll make some nicer methods to wrap default behaviour.

```php
<?php

class Request extends WP_REST_Request
{
    /**
     * Get all inputs
     *
     * @return array
     */
    public function all()
    {
        return $this->get_params();
    }

}

```

## Response

The `WP_REST_Response` class extends [`WP_HTTP_Response`](https://developer.wordpress.org/reference/classes/wp_http_response/).

This class has getter/setter methods for the data, status and headers of the response, which we will use to improve our `Response` class.

Where possible, I will be using Laravel method names as this is already in my developer flow, but there's no hard rules.

```php
<?php

class Response extends WP_REST_Response
{
    protected string $statusText;

    public function status(): int
    {
        return $this->get_status();
    }

    public function statusText(): string
    {
        return $this->statusText;
    }

    public function setStatusCode(int $code): void
    {
        $this->set_status($code);
    }

    public function set_status(int $code): void
    {
        parent::set_status($code);

        $this->statusText = get_status_header_desc($status);
    }

    public function content(): mixed
    {
        return $this->get_data();
    }
}

```

[def]: Test
