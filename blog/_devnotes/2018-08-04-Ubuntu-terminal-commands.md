---
layout: post
title: "Ubuntu terminal commands"
description: "Useful shortlinks and tips in Ubuntu terminal"
tags: [ Linux , Shell , command ]
categories: [Shell, Linux, Command]
---

# Ubuntu terminal commands
---

#### Get rights of a folder 
>$ sudo chown -R 'username' dir/

---
#### Cleaning the cache and the computer
>$ sudo apt-get autoremove
$ sudo apt-get autoclean

---
#### Add PPA repository
>$ sudo add-apt-repository ppa:xyz/xyz
$ sudo apt-get update
$ sudo apt-get install xyz

---
#### Remove PPA repository ::
>$ sudo add-apt-repository --remove ppa:xyz/xyz

---
#### Java Virtual Machine for Java Applications
>$ sudo apt install openjdk-8-jre

---
#### Go to command in terminal
>$ cd ~/directory/
$ xdg-open .
$ xdg-open file

---
#### Creating SSH (v2) key in terminal
>$ ssh-keygen -t rsa

---
#### Simple installation of Brew - the missing package
>$ sudo apt install linuxbrew-wrapper

and/or

>$ sh -c "$(curl -fsSL https://raw.githubusercontent.com/Linuxbrew/install/master/install.sh)"
---
#### Updates & upgrades
>$ sudo apt-get update

>$ sudo apt-get upgrade

>$ sudo apt-get --only-upgrade < package >

>$ sudo apt-get dist-upgrade < package >
---

#### Kernel Version
>$ uname -a
---

#### Distribution Information
>$ lsb_release -a
---

#### Unzip/extract tar.gz files
>$ tar -xvzf file.tar.gz
---

#### Gitlab Host
>$ gitlab-ctl start

>$ gitlab-ctl stop

>$ gitlab-ctl restart
---

#### Change default terminal in Ubuntu
>$ sudo update-alternatives --config x-terminal-emulator
---

#### Inline pw in terminal 
>$ echo < password> | sudo -S < command>

Example
>$ echo aimer | sudo -S /opt/lampp/manager-linux-x64.run
---

#### Mount ISO
>$ sudo mount -o loop file.iso /dir/folder
---

#### Display your username
>$ whoami

Whit Id
>$ id -un
---

#### Check chmod status - current
>$ stat --format '%a' /directory or ".filte"
---

#### Set read/write permission on hard drive
>$ cd /media/your_external_drive
>$ sudo chmod -R -v 777 *

---

#### Default permission of /opt folder XAMPP
>$ sudo chmod -R 777 /opt/
>$ sudo chown -R root /opt/

---


