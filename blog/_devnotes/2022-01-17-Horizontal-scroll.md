---
layout: post
title: "Horizontal scrolling with JS"
description: "Scroll ability in horizontal scrollbars"
tags: [ JS , Web ]
---

## Code snippets

HTML

{% include codeHeader.html %}
```
<div class="section">
  <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
    <div><h1>Scroll</h1></div>
  <div><h1>-</h1></div>
  <div><h1>with</h1></div>
  <div><h1>-</h1></div>
  <div><h1>mouse!</h1></div>
  <div><h1>-</h1></div>
  
  
</div>
```

CSS

{% include codeHeader.html %}
```
h1{
  color: gray;
}
.section {
  overflow-x: scroll;
  display: flex;
}

.section div {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section > div:nth-child(even) {
  background-color: #ccc;
}
```

JS

{% include codeHeader.html %}
```
let myScroll = document.querySelector(".section");
myScroll.addEventListener("wheel", (e) => {
    e.preventDefault();
    myScroll.scrollLeft += e.deltaY;
});

```
