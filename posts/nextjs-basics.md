---
title: 'Next.js Basics'
date: '2022-02-04'
---

## Fetching Data
Use `getStaticProps` to fetch external data that is needed for **page** content.

## Routes
Use `getStaticPaths` to create a **page** with dynamic routes. Export `getStaticPaths` from a file name inside brackets (`[]`). For example, to create a dynamic page route, create a file with the filename inside brackets:<br>
`[id].js`.<br>
Inside that file, create a function using `getStaticPaths` that will return a list of possible values for `id`, e.g.:<br>

<br>

The `[id].js`  file should also use `getStaticProps` to fetch data associated with the `id`.

