---
layout: post
title: "Using CSS features queries"
description: "CSS features like vh, @supports, etc"
tags: [ CSS, Web, Development ]
---


# Using CSS feature queries
>CSS feature queries are now supported almost everywhere. They allow you to use cutting edge CSS with subtle and precise feature detection.

>Feature queries are supported by Chrome 28+, Microsoft Edge 12+, Firefox 52+, Safari 9+, iOS Safari 9+, Opera 12.1+ and Chrome for Android 71+. There's no support for IE, but that really isn't the point.
---

## How feature queries work
> The concept is quite simple, and has the same structure as `media queries`.

{% include codeHeader.html %}
```
  @supports (height: 100vh) {
     .container {
          height: 100vh;
     }
}

```

>This asks if the vh value is supported, the viewport height of the browser, rather than the height of the page. If so, it sets the height value.

>The following example shows real world use of feature queries.

{% include codeHeader.html %}
```
  .container {
     height: 100%;
}

@supports (height: 100vh) {
     .container {
          height: 100vh;
     }
}

```

>The container div has a height value of 100%, unless the browser supports the vh value. Older browsers will simply ignore the @supports block.

>The `not` operator is also supported.

{% include codeHeader.html %}
```
  .container {
     height: 100vh;
}

@supports not (height: 100vh) {
     .container {
          height: 100%;
     }
}
```

>Another example, this time asking if `CSS Grids` are supported.

{% include codeHeader.html %}
```
  .block {
     float: left;
     ...
}

@supports (display: grid) {
     .block {
          float: none;
          display: grid;
          ...
     }
}
```
>And so on. Simple and effective.