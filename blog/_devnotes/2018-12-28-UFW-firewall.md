---
layout: post
title: "UFW firewall"
description: "Setup and configure UFW firewall"
tags: [ Shell, Command, Linux]
categories: [ Command, Linux]
---

# Ufw setup/configuration

---

##### Install ufw
>$ sudo apt-get install ufw

---

##### Default setup
>$ sudo ufw default deny incoming
>$ sudo ufw deafult allow outgoing

---

##### Allowing SSH connections
>$ sudo ufw allow ssh
>$ sudo ufw allow 22

---

##### Enabling Ufw
>$ sudo ufw enable

---

##### Allowing other connections
>$ sudo ufw allow http
>$ sudo ufw allow 80
>
>$ sudo ufw allow https
>$ sudo ufw allow 443
>
>$ sudo ufw allow ftp
>$ sudo ufw allow 21/tcp

---

##### Specific port ranges
>$ sudo ufw allow 6000:6007/tcp
>$ sudo ufw allow 6000:6007/udp

---

##### Specific IP addresses
>$ sudo ufw allow from 15.15.15.51
###### Specific port that the IP addresses to connected to
>$ sudo ufw allow from 15.15.15.51 to port 22

---

##### Subnets
>$ sudo ufw allow from 15.15.15.0/24
##### Specify the destination port 
>$ sudo ufw allow from 15.15.15.0/24 to any port 22

---

