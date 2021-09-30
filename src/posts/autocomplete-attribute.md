---
name: Autocomplete attribute
title: Autocomplete attribute // Ben Rutland Web
description: Save time for your users by providing the autocomplete attribute to your form elements.
thumbnail: /@fs/img/login-form.png
tags: ["html"]
layout: post
---

# Autocomplete attribute

::: lead
Save time for your users by providing the `autocomplete` attribute to your form elements.
:::

![Web form](/img/login-form.png)

The `autocomplete` attribute signals to the browser that an input can be filled with stored data, for example, an email address, or credit card details.

There are many valid values for the `autocomplete` attribute as covered in the [form control specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).

I often find myself referring to the spec - even when I've used the attribute values before! I will cover some common use cases of the autocomplete attribute, complete with examples for quick reference.

## Login form

A login for is usually made up of an email and password. The `autocomplete` attributes for these are simple: `email` and `current-password` respectively.

```html
<form method="POST">
  <label for="email">Email</label>
  <input
    type="email"
    name="email"
    id="email"
    autocomplete="email"
    inputmode="email"
  />

  <label for="password">Password</label>
  <input
    type="password"
    name="password"
    id="password"
    autocomplete="current-password"
  />

  <button type="submit">Login</button>
</form>
```

### Username instead of email

You may need to use a `username` to authenticate users instead of an email address. It's as easy as it sounds.

```html
<label for="username">Username</label>
<input type="text" name="username" id="username" autocomplete="username" />
```

## Register form

A register form usually has the same input fields as a login page, with additional fields such as a `name`. Note the `password` attribute is now `new-password`.

```html
<form method="POST">
  <label for="name">Name</label>
  <input type="text" name="name" id="name" autocomplete="name" />

  <label for="email">Email</label>
  <input
    type="email"
    name="email"
    id="email"
    autocomplete="email"
    inputmode="email"
  />

  <label for="password">Password</label>
  <input
    type="password"
    name="password"
    id="password"
    autocomplete="new-password"
  />

  <button type="submit">Register</button>
</form>
```

## Names

You will see in the previous example that `name` is used to autocomplete the person's name. If you want/need to be more specific, you can use the following:

```html
<label for="title">Title</label>
<select name="title" name="title" autocomplete="honorific-prefix">
  <option>Mr</option>
  <option>Ms</option>
  <option>Dr</option>
</select>

<label for="fname">First name</label>
<input type="text" name="fname" id="fname" autocomplete="given-name" />

<label for="lname">Last name</label>
<input type="text" name="lname" id="lname" autocomplete="family-name" />
```

## Verification code

Modern applications often make use of multi-factor authentication (2fa). This can require the user provide a verification code. The input field can have several types, of which `text` and `password` are the most likely.

```html
<form method="POST">
  <label for="code">Verification code</label>
  <input
    type="text"
    name="verification_code"
    id="code"
    autocomplete="one-time-code"
    inputmode="numeric"
    pattern="\d{6}"
    title="The verification code is invalid."
  />

  <button type="submit">Confirm</button>
</form>
```

## Credit/debit cards

Payment is usually in the form of card details. Fortunately browsers can autofill this information to save time trying to find your card!

```html
<form method="POST">
  <label for="name">Name on card</label>
  <input type="text" name="name" id="name" autocomplete="cc-name" />

  <label for="number">Card number</label>
  <input
    type="text"
    name="card_number"
    id="number"
    autocomplete="cc-number"
    inputmode="numeric"
    pattern="\d{16}"
    title="The card number is invalid."
  />

  <label for="month">Month</label>
  <input
    type="text"
    name="expiry_month"
    id="month"
    autocomplete="cc-exp-month"
    inputmode="numeric"
    pattern="0[1-9]|1[0-2]"
    title="The expiry month does not match the format MM."
  />

  <label for="year">Year</label>
  <input
    type="text"
    name="expiry_year"
    id="year"
    autocomplete="cc-exp-year"
    inputmode="numeric"
    pattern="\d{4}"
    title="The expiry year does not match the format YYYY."
  />

  <label for="cvc">CVC</label>
  <input
    type="text"
    name="cvc"
    id="cvc"
    autocomplete="cc-csc"
    inputmode="numeric"
    pattern="\d{3,4}"
    title="The CVC is invalid."
  />

  <button type="submit">Pay</button>
</form>
```

### Card expiry

The card expiry `autocomplete` can take the month and year separately (as above) or in one field. Sadly, `month` input type is not widely supported so the above solution is preferred.

```html
<label for="expiry">Expiry</label>
<input type="month" name="expiry" id="expiry" autocomplete="cc-exp" />
```

## User profile

Most applications feature a user profile, with basic details that the user may (or may not) want to provide! Autocompleting these fields is a great way to improve user satisfaction.

```html
<form method="POST">
  <label for="dob">Date of birth</label>
  <input type="date" name="dob" id="dob" autocomplete="bday" />

  <label for="website">Website</label>
  <input type="url" name="website" id="website" autocomplete="url" />

  <label for="gender">Gender</label>
  <select name="gender" id="gender" autocomplete="sex">
    <option>Female</option>
    <option>Male</option>
    <option>Other</option>
  </select>

  <button type="submit">Save</button>
</form>
```

## Address

Addresses take many forms, to which different countries have different formats. In the UK, our (full) addresses usually take the format:

```
Street address (1-2 lines)
City/town
County
Country
Postcode
```

Of course the full adress isn't always needed - Our postal service can make do with just a post code and street number!

Below is my opinionated format for addresses that take care of the essentials. Don't forget the browser can make smart decisions for the user based on the address information they have provided.

```html
<form method="POST">
  <label for="street">Street</label>
  <textarea name="street" id="street" autocomplete="street-address"></textarea>

  <label for="city">City/Town</label>
  <input type="text" name="city" id="city" autocomplete="address-level2" />

  <label for="county">County</label>
  <input type="text" name="county" id="county" autocomplete="address-level1" />

  <label for="country">Country</label>
  <select name="country" name="country" autocomplete="country">
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
  </select>

  <label for="postcode">Postcode</label>
  <input type="text" name="postcode" id="postcode" autocomplete="postal-code" />

  <button type="submit">Send</button>
</form>
```

### Country

The `country` value informs the browser to autofill based on the 'ISO 3166-1-alpha-2' code. If you want to autofill based on the country name, use the `country-name` value instead.

```html
<label for="country">Country</label>
<select name="country" name="country" autocomplete="country-name">
  <option>United Kingdom</option>
  <option>United States</option>
  <option>Canada</option>
</select>
```

## Shipping/Billing

You can differentiate between shipping and billing fields by using the special tokens "shipping" and "billing" in the `autocomplete` attribute. In most cases this will apply to address fields, but is also valid for contact information.

```html
<form method="POST">
  <label for="street">Street</label>
  <textarea
    name="street"
    id="street"
    autocomplete="shipping street-address"
  ></textarea>

  <label for="postcode">Postcode</label>
  <input
    type="text"
    name="postcode"
    id="postcode"
    autocomplete="shipping postal-code"
  />

  <label for="tel">Contact number</label>
  <input
    type="tel"
    name="tel"
    id="tel"
    autocomplete="shipping tel"
    inputmode="tel"
  />

  <button type="submit">Buy</button>
</form>
```

## Job profile

Many of the fields that usually appear in a job profile also show in the forms previously highlighted, but I'll cover some extra fields that may make your application even faster. Take not of the `email` and `telephone` fields - the `autocomplete` attribute value has "work" in front. Like shipping/billing addresses, you can use additional tokens to give the broswer more specific information about the particular field.

```html
<form method="POST">
  <label for="title">Job title</label>
  <input
    type="text"
    name="title"
    id="title"
    autocomplete="organization-title"
  />

  <label for="company">Company</label>
  <input type="text" name="company" id="company" autocomplete="organization" />

  <label for="email">Email</label>
  <input
    type="email"
    name="email"
    id="email"
    autocomplete="work email"
    inputmode="email"
  />

  <label for="tel">Telephone</label>
  <input
    type="tel"
    name="tel"
    id="tel"
    autocomplete="work tel"
    inputmode="tel"
  />

  <button type="submit">Submit</button>
</form>
```
