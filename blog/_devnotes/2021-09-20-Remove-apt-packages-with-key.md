---
layout: post
title: "Remove APT packages with key/id"
description: "List and remove packages from APT package manager"
tags: [ Linux , Shell , command, APT ]
---


```
$ sudo apt-key list
```

Then:
```
$ sudo apt-key del 005EAE8119BB5BCA
```

Then:
```
$ sudo apt purge clipgrab
```