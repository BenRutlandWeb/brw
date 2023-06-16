---
name: Hello World!
title: Hello World! // Ben Rutland Web
description: The obligatory "hello world" post that every good developer writes.
thumbnail: https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=720
tags: ["tailwindcss", "alpine", "laravel", "livewire"]
layout: post
---

# Building a Laravel application

![Hello world!](https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=720)

## Laravel

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh metus,
tempor vel felis scelerisque, dapibus rutrum metus. Quisque eu diam id augue
feugiat viverra. Maecenas porta eros eu rutrum mattis. Donec semper leo ut
tellus finibus, et tincidunt ipsum commodo. Praesent sapien purus, consectetur
eget congue non, tempor in felis.

Nam nec magna in diam malesuada pretium sed
non ex. Cras mattis, lectus eu feugiat semper, augue ligula blandit leo, ut
vestibulum magna nisl quis dui. Nullam malesuada, tellus vitae sagittis lacinia,
lacus enim tempus turpis, eget scelerisque ipsum lectus id augue. Fusce dictum
et neque id facilisis. Sed eget urna augue. Aliquam suscipit tincidunt magna,
eget viverra velit facilisis eget. Nam hendrerit nulla sit amet ipsum finibus
varius. Cras commodo justo ligula, id pulvinar mauris fermentum ac. Nullam a
hendrerit dui. Fusce vitae enim non ipsum blandit venenatis sit amet in sem.

```php
<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return 'Hello World!';
});

```

## Tailwind CSS

```html
<div>
  <label for="price" class="block text-sm font-medium text-gray-700">
    Price
  </label>
  <div class="mt-1 relative rounded-md shadow-sm">
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    >
      <span class="text-gray-500 sm:text-sm">$</span>
    </div>
    <input
      type="text"
      name="price"
      id="price"
      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
      placeholder="0.00"
    />
    <div class="absolute inset-y-0 right-0 flex items-center">
      <label for="currency" class="sr-only">Currency</label>
      <select
        id="currency"
        name="currency"
        class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
      >
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
    </div>
  </div>
</div>
```

### Alpine.js

Sed hendrerit justo diam, sed sodales leo mollis lobortis. Donec elementum felis
aliquet, finibus tellus non, iaculis urna. Vestibulum tellus odio, vehicula sit
amet rhoncus vel, tincidunt id enim. Proin rhoncus velit sem, sit amet faucibus
turpis sollicitudin nec. Ut turpis nisi, auctor vitae hendrerit blandit, dapibus
quis elit. Quisque dolor sapien, interdum ut varius sit amet, accumsan eu metus.

```html
<div x-data="{ open: false }">
  <button @click="open = ! open">Toggle Content</button>
  <div x-show="open">Content...</div>
</div>
```

Vivamus volutpat, dolor quis vestibulum sodales, purus nibh cursus justo, a
tincidunt nunc orci eget purus. Morbi vel dictum lacus. Pellentesque habitant
morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin
mattis urna et metus accumsan pellentesque ac sit amet leo. Nam pretium est at
leo elementum, eu semper eros rhoncus.

- Pellentesque habitant morbi tristique
- Pellentesque habitant morbi tristique
- Pellentesque habitant morbi tristique
- Pellentesque habitant morbi tristique
- Pellentesque habitant morbi tristique

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
turpis egestas. Aenean ut sollicitudin urna, quis sagittis turpis. Praesent
justo augue, facilisis in porttitor vitae, maximus eu sem. Quisque viverra purus
at odio vehicula, non ullamcorper elit sodales. Donec ornare orci id feugiat
semper. Mauris nisi leo, volutpat in faucibus id, egestas quis odio. Duis nisi
arcu, scelerisque a felis at, venenatis dignissim velit. In hac habitasse platea
dictumst. Donec vel dui massa. Nulla sem dolor, mollis at placerat eget, cursus
id ipsum.

Integer sed velit ac orci bibendum aliquam vel vel justo. Sed sit amet nisi a
arcu pretium finibus. Integer elementum maximus felis, at pulvinar nisl rhoncus
eget. Morbi ultricies, ipsum non iaculis ornare, arcu dolor ultricies tortor,
scelerisque hendrerit sem nisl sit amet eros. Ut ultricies massa enim, sed porta
nunc hendrerit ut. Sed sodales condimentum nisl at luctus. Pellentesque
malesuada orci ut lacus lobortis scelerisque. Maecenas interdum felis varius
quam porttitor, in ornare risus convallis. Pellentesque aliquet mollis suscipit.
Duis mauris leo, ultricies sollicitudin nisl quis, sollicitudin blandit dui.
Quisque sagittis, enim ut placerat congue, quam risus suscipit magna, et finibus
lectus felis sed elit.

Duis sed tempus nulla. Quisque maximus efficitur ante vitae finibus. Nam ut
condimentum neque, non fringilla risus. Sed vestibulum sed nunc eu tincidunt.
Pellentesque bibendum nisl eget nibh hendrerit, non dignissim arcu scelerisque.
Vestibulum ac dui blandit enim dictum pretium vitae ac nibh. Nullam et
pellentesque ipsum. Vivamus ligula libero, tincidunt a nibh vitae, porta ornare
felis. Ut malesuada nulla tortor, non euismod justo molestie sagittis. Aliquam
non erat dui. Nulla lectus eros, elementum vitae sollicitudin non, sagittis id
ante. Donec malesuada sem quis dui scelerisque, non euismod quam laoreet. Proin
tempus tempus mauris, iaculis fringilla sapien iaculis eget. Nunc consectetur
turpis velit, in maximus elit sagittis id. Ut quis interdum massa, eget
condimentum tellus.
