---
layout: post
title: "Font features settings"
description: "OpenType fonts - features settings"
tags: [ OpenType, Linux ]
categories: [OpenType, Linux]
---


## Font-feature-settings property for OpenType fonts
>OpenType fonts have feature settings you can use to tweak the font to your liking, using font-feature-settings property.

>One specific use-case for this feature is when you wish to use a cool looking font for a countdown timer, but it doesn’t happen to be a mono-spaced font. 

>This means the width of numbers will change and keep pushing content around. Solution:

```
  font-feature-settings: “tnum”;
  font-variant-numeric: tabular-nums;
```