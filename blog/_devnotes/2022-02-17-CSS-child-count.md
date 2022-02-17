---
layout: post
title: "Count child elements in parent"
description: "Count the exact numbers of children if the parent has the accurate quantity"
tags: [JavaScript, Web, Development, CSS]
---

The trick is to select the first child when it's also the nth-from-the-last child. This effectively selects based on the number of siblings.

The key part is the following

```
    li:first-child:nth-last-child(2),
    li:first-child:nth-last-child(2) ~ li {
    width: 50%;
    background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
    }
```

{% include codepen.html hash="yLPpgdZ" username="r4nd3l" title="Styling elements based on number of siblings" %}