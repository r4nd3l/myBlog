---
layout: post
title: "Shadow DOM hack"
description: "A little code snippet to overwrite the shadow DOM"
tags: [JavaScript, Web, hack, TypeScript]
---

Infinite scroll to the bottom of the page which could be handy to in/on-load all of the "lazy" assets and get the entire content of the whole page

Set the delay time with the last number of the line, like 2000 is equal to 2s

---

> JavaScript

> TypeScript

{% include codeHeader.html %}

```
    const knob: any = Array.from(document.querySelectorAll('ion-range'));

    knob.forEach(element => {
      element.shadowRoot.innerHTML = `<style>.range-knob-a > div{background: blue !important;}</style>`;
    });
```
