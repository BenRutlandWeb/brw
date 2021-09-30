---
name: Enhanced WordPress REST Requests and Responses
title: Enhanced WordPress REST Requests and Responses // Ben Rutland Web
description: How to extend WordPress Request and Response objects
thumbnail: /brw/img/wp-rest-api.png
tags: ["php", "wordpress"]
layout: post
---

# Enhanced WordPress REST Requests and Responses

::: lead
How to extend WordPress Request and Response objects.
:::

![Enhanced WordPress REST Requests and Responses](/img/wp-rest-api.png)

Firstly let's discuss what we want from our `Request` and `Response` objects.

## Request

- Ways to interact with the request inputs: `get`, `boolean`, `has`
- The ability to validate the request

```php
<?php

$request = new Request();

$request->get('email');
$request->boolean('remember');
$request->has('password');

$request->hasHeader('content-type');
```

## Response

- A simple way to return content, status codes and headers
- The ability to automatically convert content to the desired format

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

```php
<?php

class Response extends WP_REST_Response
{

}

```
