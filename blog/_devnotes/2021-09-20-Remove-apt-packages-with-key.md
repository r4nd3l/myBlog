---
layout: post
title: "Remove APT packages with key/id"
description: "List and remove packages from APT package manager"
tags: [ Linux , Shell , command, APT ]
---

{% include codeHeader.html %}
```
$ sudo apt-key list
```

Then:

{% include codeHeader.html %}
```
$ sudo apt-key del 005EAE8119BB5BCA
```

Then:

{% include codeHeader.html %}
```
$ sudo apt purge clipgrab
```