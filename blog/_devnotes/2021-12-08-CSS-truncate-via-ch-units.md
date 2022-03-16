---
layout: post
title: CSS truncate via ch units 
description: "How to truncate text via ch units in CSS"
tags: [ CSS , truncate , text ]
---

CSS

{% include codeHeader.html %}
```
.myClass {
  font-family: monospace;
  width: 2ch;
  overflow: hidden;
  white-space: nowrap;
}
```

HTML

{% include codeHeader.html %}
```
<p class="myClass">
  My String
</p>
```