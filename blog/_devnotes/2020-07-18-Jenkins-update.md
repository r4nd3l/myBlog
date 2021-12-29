---
layout: post
title: "Jenkins update"
description: "Update Jenkins (open source automation server) on Raspberry Pi"
tags: [ Linux , localhost , VNC ]
categories: [Shell, Web, VNC]
---

## Jenkins update 
---

- VNC -> Jenkins Server - http://localhost:8080/
- Download the jenkins.war file - provided by the notify
- Use the terminal to overwrite the exist file like:
  >$ sudo mv /home/pi/Downloads/jenkins.war /usr/share/jenkins/jenkins.war

- Then restart the jenkins server - http://localhost:8080/safeRestart
- Backup library:
> [OpenPKG Project: Download](http://download.openpkg.org/components/cache/jenkins/)