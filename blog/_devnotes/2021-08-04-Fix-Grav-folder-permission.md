---
layout: post
title: "Fix Grav folder permission"
description: "Handy way to fix folder permission in Grav CMS on linux"
tags: [ Linux , Shell , command ]
---

## Fix Grav folder permission setup

Create a file `FixR4M_WareHouse.sh`

And paste the following within:

```
cd /home/matt/Documents/Git/R4M_WareHouse
chown -R www-data:www-data .
find . -type f | xargs chmod 664
find ./bin -type f | xargs chmod 775
find . -type d | xargs chmod 775
find . -type d | xargs chmod +s
touch user/config/system.yaml
```

Run the script like:
`$ sudo bash ./home/matt/Documents/GravTools/FixR4M_WareHouse.sh`