---
layout: post
title: "Get jQuery version"
description: "Console out the version of the current jQuery from browsers"
tags: [JavaScript, Web, Development]
---


Copy and paste into the DevTools > console tab and hit enter

```
if (typeof jQuery != 'undefined') {  
    // jQuery is loaded => print the version
    alert(jQuery.fn.jquery);
}
```
