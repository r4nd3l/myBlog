---
layout: post
title: PHP extension check on linux 
description: "List all the php extensions on linux environment"
tags: [ PHP , linux , environment, install ]
categories: [PHP, Linux, Code snippet]
---

### Php extension check

```
$ php -m
```

or 
```
$ -i
```
or
```
$ php -r "print_r(get_loaded_extensions());"
```

Installed package check:
Log into your Linux Server via SSH as ‘root’.
```
$ php --ini
```
