---
layout: post
title: Add event listener to multiple buttons with the same class 
description: "JavaScript based solution to add event listener by classes"
tags: [ CSS , JavaScript , event ]
---

## Add event listener to multiple buttons with the same class

```
    btns = document.getElementsByClassName("saveBtn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
			//Add function here
        });
    }
```