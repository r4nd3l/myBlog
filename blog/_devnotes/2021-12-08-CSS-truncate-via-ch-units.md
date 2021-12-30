---
layout: post
title: CSS truncate via ch units 
description: "How to truncate text via ch units in CSS"
tags: [ CSS , truncate , text ]
---

CSS

```
.myClass {
  font-family: monospace;
  width: 2ch;
  overflow: hidden;
  white-space: nowrap;
}
```

HTML

```
<p class="myClass">
  My String
</p>
```