---
name: ACF Field Group Builder
title: ACF Field Group Builder // Ben Rutland Web
description: A braindump of how an ACF Field Group Builder might work
thumbnail: /img/acf-field-group-builder.jpg
tags: ["php", "wordpress"]
layout: post
---

# ACF Field Group Builder

::: lead
A braindump of how an ACF Field Group Builder might work.
:::

I want something like Laravels' `Schema` builder for ACF fields:

```php
<?php

$hero = Group::create('hero', function (Field $field) {

    $field->image('image');

    $field->text('title')->required()->default('Hello World!');

    $field->editor('content');

    $field->select('filter_color')->nullable()->choices([
        'red'   => 'Red',
        'green' => 'Green',
        'blue'  => 'Blue',
    ]);

    $field->color('overlay_color')->default('rgba(0, 0, 0, 0.5)')->opacity();

});

$hero->where('block', 'acf/hero');

```
