---
layout: post
title: CSS truncate by lines 
description: "How to truncate text by lines with CSS"
tags: [ CSS , truncate , text ]
---

# CSS truncate by lines

Truncate 2 lined
```
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-size: 1.125rem;
```

Truncate 3 lined
```
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-size: 1.125rem;
```

Truncate 4 lined
```
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-size: 1.125rem;
```