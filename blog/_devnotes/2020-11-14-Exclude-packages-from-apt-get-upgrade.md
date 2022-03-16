---
layout: post
title: "Exclude packages from apt-get upgrade"
description: "Control the APT package manager list to mark which to download or to be hold"
tags: [ Linux , Shell , command ]
---


> To hold a package:

{% include codeHeader.html %}
```
$ sudo apt-mark hold <package>
```
or

{% include codeHeader.html %}
```
echo <package> hold | sudo dpkg --set-selections
```
> To unhold a package:

{% include codeHeader.html %}
```
$ sudo apt-mark unhold <package>
```
or

{% include codeHeader.html %}
```
echo <package> install | sudo dpkg --set-selections
```
