---
layout: post
title: "Shadow DOM hack"
description: "A little code snippet to overwrite the shadow DOM"
tags: [JavaScript, Web, hack, TypeScript]
---

A little code snippet to overwrite the shadow DOM

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
