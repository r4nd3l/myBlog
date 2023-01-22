---
layout: post
title: "Debugging JS in browser console"
description: "A practical way to debug Js in browser console via event listeners"
tags: [JavaScript, Web]
---

You can log all the events dispatched to an object using the Command Line API method. The event objects are then logged to the Console. Useful when you need a reminder of the available properties on the event object.

![monitorEvents](./../../assets/img/monitorEvents.webp){: .mx-auto}

---

> JavaScript

Subscribe to all windows events:

{% include codeHeader.html %}

```
    monitorEvents(window, "click")
```

---

Unsubscribe from all windows events:

{% include codeHeader.html %}

```
    unmonitorEvents(window, "click")
```

---

source: [source](https://developer.chrome.com/docs/devtools/console/utilities/)
