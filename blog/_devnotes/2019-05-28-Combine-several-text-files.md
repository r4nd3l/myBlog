---
layout: post
title: "Combine files in UNIX"
description: "How to combine serveral text files into a single file in UNIX"
tags: [ Linux , command , shell ]
categories: [Shell, web, Linux]
---

### Combine several text files into a single file in Unix
To combine several text files into a single file in Unix, use the ``cat`` command:
>$ cat file1 file2 file3 > newfile
---

##### Replace ``file1``, ``file2``, and ``file3`` with the names of the files you wish to combine, in the order you want them to appear in the combined document. Replace ``newfile`` with a name for your newly combined single file.
If you want to add one or more files to an existing document, use the format:
>$ cat file1 file2 file3 >> destfile
---

This command will add ``file1``, ``file2``, and ``file3`` (in that order) to the end of ``destfile``.

#### Note: 
If you use ``>`` instead of ``>>``, you will overwrite destfile rather than add to it.
