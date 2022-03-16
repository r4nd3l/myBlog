---
layout: post
title: "Infinite scroll to the bottom"
description: "JS script to scroll infinitely to the bottom of the page"
tags: [JavaScript, Web, Development]
---

Infinite scroll to the bottom of the page which could be handy to in/on-load all of the "lazy" assets and get the entire content of the whole page

Set the delay time with the last number of the line, like 2000 is equal to 2s

***

> JavaScript

```
    setInterval(function() { window.scrollTo(0, document.body.scrollHeight); },2000);
```