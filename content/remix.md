---
title: "Remix is catching pace"
path: /remix
date: 2020-10-24
summary: "Read my guide to setting up Gridsome and how Vue can help greatly. Remix might be the best one to go for in near future."
image: "https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/Vue.js-cta-main.jpg"
tags: ['Vue.js' ]
---

## Hello world!

This is where your content goes

Gatsby 4 introduced a lot of new features, most notably the introduction of additional rendering options besides Static Site Generation (SSG): Deferred Static Generation (DSG) and Server-Side Rendering (SSR). If you missed this exciting release you can catch up in the blog post What’s New in Gatsby 4 after following this tutorial.

So why should you care about Deferred Static Generation? In a nutshell it delays (or defers) the generation of pages until a user actually requests the page. After that the build artifacts (HTML & JSON) are cached at the CDN level and for all visitors afterwards it behaves like a normal SSG page. In a scenario where you build thousands of pages but only a subset of them gets regular visits from users, DSG can dramatically improve your build speeds. And you still get the SSG benefits like great SEO, speed, and reliability.

## Problem

Recently while updating with [Skela](https://github.com/Upstatement/skela-wp-theme) with webpack, I encountered a weird error where I wasn't able to run a simple script:

```shell:title=bin/composer
#!/bin/bash
docker-compose exec -w /var/www/html/wp-content/themes/skela wordpress composer "$@"
```

When trying to run this script via `./bin/composer install`, I got this error in my terminal:

```shell
ERROR: Setting workdir for exec is not supported in API < 1.35 (1.30)
```

The error was coming from the `-w` flag in the `docker-compose exec` command in the `composer` script.

# Solution

Turns The fix was to update the version in my `docker-compose.yml` file to from version `3.5` to `3.6`. It's strange because 3.5 isn't anywhere close to the API version `1.35` from the error message 🤷‍♀️

```shell
<<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
</head>
<body>

</body>
</html>
```