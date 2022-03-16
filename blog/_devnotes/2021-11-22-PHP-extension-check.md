---
layout: post
title: PHP extension check on linux 
description: "List all the php extensions on linux environment"
tags: [ PHP , linux , environment, install ]
---

### Php extension check

{% include codeHeader.html %}
```
$ php -m
```

or 

{% include codeHeader.html %}
```
$ -i
```
or

{% include codeHeader.html %}
```
$ php -r "print_r(get_loaded_extensions());"
```

Installed package check:
Log into your Linux Server via SSH as ‘root’.

{% include codeHeader.html %}
```
$ php --ini
```
