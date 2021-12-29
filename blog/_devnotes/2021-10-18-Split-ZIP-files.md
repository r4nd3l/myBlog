---
layout: post
title: Split ZIP files 
description: "How to split ZIP archive into multiple blocks of a specific size"
tags: [ ZIP , shell , script ]
categories: [Command, Linux]
---

```
$ zip -r -s 5m myFiles.zip exampleFolder/
``` 

`-r` is for recursive

`-s` splits the zip archive 

`5m` a specified size

`myFolder.zip` - result name of the archive
`exampleFolder/` - target folder