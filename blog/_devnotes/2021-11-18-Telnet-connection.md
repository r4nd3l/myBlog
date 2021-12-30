---
layout: post
title: Telnet connection
description: "Practical way to save telnet session into a file"
tags: [ Linux , Shell , command, telnet ]
---

### Telnet connection - save session into file

You can do it by using the tee command:
`$ telnet $someIp | tee -a -i someFile`

Example:
`$ telnet 192.168.1.251 | tee -a -i modem.txt`

File will be saved where the terminal path was