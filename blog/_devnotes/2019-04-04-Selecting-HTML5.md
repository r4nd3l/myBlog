---
layout: post
title: "Selecting HTML5"
description: "Ids and classes names that start with a number in CSS"
tags: [ CSS, Web, Development ]
categories: [CSS, Web, Development]
---


Since HTML5 it’s been valid to start an HTML element ID with a number. For example `<div id="10">`. From an HTML perspective, that’s fine.

However that doesn’t mean that CSS is happy to have an ID selector starting with a number. For example, this will not work:

```
  #10 { color: red; }
```

That’s because even though HTML5 is quite happy for an ID to start with a number, CSS is not. CSS simply doesn’t allow selectors to begin with a number. The relevant part of the specification states:

>In CSS, identifiers (including element names, classes, and IDs in selectors) can contain only the characters [a-zA-Z0-9] and ISO 10646 characters U+00A0 and higher, plus the hyphen (-) and the underscore (_); they cannot start with a digit, two hyphens, or a hyphen followed by a digit. Identifiers can also contain escaped characters and any ISO 10646 character as a numeric code (see next item). For instance, the identifier “B&W?” may be written as “B\&W\?” or “B\26 W\3F”. - W3C Specification

However, you can easily work around this by using an attribute selector:
```
  [id="10"] {color: red;}
```

However, another possibility is to use a unicode character instead of a number. For example, instead of the attribute selector, you could do this:

```
  #\31 0 {color: red;}
```

However, that seems more difficult to me than the attribute selector, I’d always been to look up what the correct unicode character was. Other devs looking at those selectors might also wonder what on earth they are.

>If going the attribute selector route, be aware that it only works down to IE7. If you need to support older browsers than that you have my sympathies (you can still use the unicode selectors).

The same number and selector rules apply with class names. You can write a class starting with a number in HTML but to get the selector to work in CSS you either need to use the attribute selector or escape it with unicode. To exemplify the prior example with a class instead:

```
  <div class="10">hello</div>
```
You could either do this:

```
  [class="10"] {color: red;}
```
Or this:

```
  .\31 0 {color: red;}
```

---








