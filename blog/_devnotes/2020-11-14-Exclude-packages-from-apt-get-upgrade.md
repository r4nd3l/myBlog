---
layout: post
title: "Exclude packages from apt-get upgrade"
description: "Control the APT package manager list to mark which to download or to be hold"
tags: [ Linux , Shell , command ]
categories: [Shell, Linux, Command]
---


> To hold a package:
```
$ sudo apt-mark hold <package>
```
or
```
echo <package> hold | sudo dpkg --set-selections
```
> To unhold a package:
```
$ sudo apt-mark unhold <package>
```
or
```
echo <package> install | sudo dpkg --set-selections
```
