---
layout: post
title: "Set PhpMyAdmin"
description: "Way to set phpmyadmin to listen only on localhost"
tags: [ Linux , command , shell ]
categories: [Shell, command, Linux]
---


>$ sudo nano /etc/phpmyadmin/apache.conf

```
Alias /phpmyadmin /usr/share/phpmyadmin
<Directory /usr/share/phpmyadmin>
    Options Indexes FollowSymLinks
    DirectoryIndex index.php

    Order deny,allow
    Deny from all
    Allow from 127.0.0.1
</Directory>
```
---