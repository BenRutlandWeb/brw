---
name: AJAX routes with Radiate
title: AJAX routes with Radiate // Ben Rutland Web
description: A quick guide to getting started with Radiate - a WordPress plugin and theme framework inspired by Laravel.
thumbnail: /img/radiate-ajax.png
tags: ["radiate", "php", "wordpress"]
layout: post
---

# AJAX routes with Radiate

::: lead
AJAX routes in Radiate couldn't be simpler.
:::

![Radiate AJAX route code](/img/radiate-ajax.png)

I want something like Laravel's migrations for ACF fields:

```php
Group::create('call_to_action', function (Field $field) {
    $field->text('title')->required()->default('Hello World!');
    $field->editor('content');
    $field->link('link');

    $showImage = $field->boolean('show_image')->default(0);

    $field->image('image')->if($showImage);

    $field->select('background_color')->choices([
        'red'   => 'Red',
        'green' => 'Green',
        'blue'  => 'Blue',
    ]);
});





$titleField = Field::create()->text('title')->default('Title');

Group::create('hero', function (Field $field) use ($titleField) {

    $showImage = $field->boolean('show_image')->default(0);

    $field->use($titleField);

})



```
