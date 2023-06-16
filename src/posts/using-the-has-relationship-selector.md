---
name: Using the :has() relational selector
title: Using the :has() relational selector // Ben Rutland Web
description: How to use the :has() relational selector to make a star-rating component
thumbnail: /img/wp-rest-api.png
tags: ["html", "css"]
layout: post
---

# Using the `:has()` relational selector

::: lead
How to use the :has() relational selector to make a star-rating component
:::

![Enhanced WordPress REST Requests and Responses](/img/wp-rest-api.png)

[CodePen](https://codepen.io/BenRutlandWeb/pen/dyKNVPp?editors=1100)

<iframe height="300" style="width: 100%;" scrolling="no" title="5 star rating simple" src="https://codepen.io/BenRutlandWeb/embed/dyKNVPp?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/BenRutlandWeb/pen/dyKNVPp">
  5 star rating simple</a> by Ben Rutland (<a href="https://codepen.io/BenRutlandWeb">@BenRutlandWeb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```html
<fieldset class="star-rating">
    <legend>Rating</legend>
    <input type="radio" name="rating" value="1" id="rating-1" />
    <label for="rating-1">1</label>
    <input type="radio" name="rating" value="2" id="rating-2" />
    <label for="rating-2">2</label>
    <input type="radio" name="rating" value="3" id="rating-3" />
    <label for="rating-3">3</label>
    <input type="radio" name="rating" value="4" id="rating-4" />
    <label for="rating-4">4</label>
    <input type="radio" name="rating" value="5" id="rating-5" />
    <label for="rating-5">5</label>
</fieldset>
```

```css
.star-rating {
    all: unset;
}

.star-rating legend,
.star-rating label {
    display: none;
}

.star-rating [type="radio"] {
    all: unset;
    cursor: pointer;
    font-size: 4rem;
    line-height: 1;
}

.star-rating [type="radio"]:checked,
.star-rating [type="radio"]:has(~ :checked) {
    --icon: "★";
}

.star-rating [type="radio"]::before {
    content: var(--icon, "☆");
}

.star-rating [type="radio"]:focus-visible {
    outline: 5px auto -webkit-focus-ring-color;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="5 star rating" src="https://codepen.io/BenRutlandWeb/embed/qBYZmVm?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/BenRutlandWeb/pen/qBYZmVm">
  5 star rating</a> by Ben Rutland (<a href="https://codepen.io/BenRutlandWeb">@BenRutlandWeb</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
