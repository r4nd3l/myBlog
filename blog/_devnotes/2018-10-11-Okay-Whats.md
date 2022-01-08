---
layout: post
title: "Okay.. What’s the situation?"
description: "Well, the thing is ,what I have already is just a simple percentage based regular front-end framework. It is the ‘A’ side of the road"
tags: [Web, Development, Framework]
---

![My bike](https://matesnotes.files.wordpress.com/2018/10/40148bb9ff9f0978e9aec69347550a51_large.jpeg?w=1024){: .mx-auto}

Well, the thing is ,what I have already is just a simple percentage based regular front-end framework. It is the ‘A’ side of the road. The ‘B’ side is going to be much more. This particular ‘B’ side should handle the hard stuff. What do I mean by that?

My plan is to reconfigure a regular framework step by step. Of course the exist framework what I’m working on, is not a bootstrap or a foundation based framework. None of it, because I don’t want to copy any of the them, but in the other hand I believe it’s a good practice how to write my own. So, instead to take one of those I decided to write my own from scratch.

As I wrote above, every column is based on an exact percentage. Currently I use four media query. Small, medium, wide and large. The large gonna be the one where the magic will goes. I would like to extend the content from that size. I still don’t know which method is the best to do this, but I think the CSS itself is not enough here. JavaScript is more suitable, but I’ll see what I can do.

```
/* Between 960px and 640px */
@media screen and (min-width:640px){
.col-wd-1{width: 8.33333%;}
.col-wd-2{width: 16.66667%;}
.col-wd-3{width: 25%;}
.col-wd-4{width: 33.33333%;}
.col-wd-5{width: 41.66667%;}
.col-wd-6{width: 50%;}
.col-wd-7{width: 58.33333%;}
.col-wd-8{width: 66.66667%;}
.col-wd-9{width: 75%;}
.col-wd-10{width: 83.33333%;}
.col-wd-11{width: 91.66667%;}
.col-wd-12{width: 100%;}
}
```

There is a second thing. I don’t want to use any compiler or Js framework. I believe the best choice is to write the lines in their own pure nature/environment. What does it mean? Well, Css variables and VanillaJs. Should be enough, even-though I don’t know, what else (method/solution) could come up during the development process.