---
layout: post
title: "Apple HFS/HFS+ Ubuntu"
description: "How to mount Apple HFS/HFS+ drives on Ubuntu with write permission"
tags: [ Linux , Shell , command, Apple ]
---

## Apple hfs/hfs+ Ubuntu
First, make sure that you have hfsprogs installed. Example installation command:

>$ sudo apt-get install hfsprogs

Next, mount or remount the HFS+ drive; commands need to be as follows:

>$ sudo mount -t hfsplus -o force,rw /dev/sdXY /media/mnt/point

ex: $ sudo mount -t hfsplus -o force,rw /dev/sdb2 /mnt/temp/
(Works with the terminal)

or

>$ sudo mount -t hfsplus -o remount,force,rw /mount/point