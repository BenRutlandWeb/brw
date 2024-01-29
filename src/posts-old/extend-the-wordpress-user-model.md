---
name: Extend the WordPress user model
title: Extend the WordPress user model // Ben Rutland Web
description: A guide to extending the WordPress WP_User class to streamline user functionality.
thumbnail: /img/extend-the-wordpress-user-model.png
tags: ["php", "wordpress"]
layout: post
---

# Extend the WordPress user model

::: lead
Extending the `WP_User` class can help development by creating useful methods to interact with the user model.
:::

![Extend the WordPress user model](/img/extend-the-wordpress-user-model.png)

## The current user

We'll start by creating some static methods to get the current user and ID. It's quite common to need the current user but we always want to return an instance of our class rather than the parent `WP_User`.

```php
<?php

class User extends WP_User
{
    public static function currentId(): int
    {
        return get_current_user_id();
    }

    public static function current(): static
    {
        return new static(static::currentId());
    }
}

```

## User roles

The `WP_User` class has a few methods to interact with the user role:

- `add_role` adds role to user
- `remove_role` removes role from user
- `set_role` sets the role of the user (replaces existing roles)

I think we can do better. Let's check if the user has a role and get all roles.

<Panel type="info">

I've left them out of the example below but I would also create camel-cased aliases for `add_role`, `remove_role` and `set_role` for a consistent API.

Where appropriate, return `$this` to allow for method chaining.

</Panel>

```php
<?php

public function addRole(string $role): static
{
    $this->add_role($role);

    return $this;
}

// create alias methods for remove_role and set_role for a consistent API.

public function hasRole(string $role): bool
{
    return in_array($role, $this->roles());
}

public function roles(): array
{
    return $this->roles;
}

```

## Creating, updating and deleting users

Now our `User` class is more useful for interacting with roles, let's add create, update and delete functionality. We'll return an instance of the class (where it makes sense) so we can write fluent code like `User::create($attrs)->addRole('editor')->addRole('contributor')`.

```php
<?php

public static function create(array $attributes = []): static
{
    unset($attributes['ID']);

    $id = wp_insert_user($attributes);

    return !is_wp_error($id) ? new static($id) : false;
}

public function update(array $attributes): static
{
    $attributes['ID'] = $this->ID;

    $id = wp_update_user($attributes);

    return !is_wp_error($id) ? new static($id) : false;
}

public function delete(): bool
{
    return wp_delete_user($this->ID);
}

```
