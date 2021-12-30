---
layout: post
title: "Get even numbers with VanillaJS"
description: "Simple VanillaJS function to console out even numbers"
tags: [ Web, Development, JavaScript]
---


```
    function paros(arr){
    var ret = [];
    
    for(var i = 0; i < arr.length; i++){
        var current = arr[i];
        if(current%2 === 0){
        ret.push(current);
        }
    }
    return ret;
    }

    console.log(paros([1,2,3,4,5,6,7,8]));
  
```