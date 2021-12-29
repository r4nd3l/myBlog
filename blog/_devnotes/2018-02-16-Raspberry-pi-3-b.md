---
layout: post
title: "Raspberry Pi 3 B+"
description: "Useful commands for RPI3 in general"
tags: [ Linux , Shell , command, terminal ]
categories: [Shell, Linux, Command]
---

# Raspberry Pi 3 B+

---

#### Connections
>Local IP: 192.168.1.7
VNC IP: 192.168.1.7:5900
Alternative address: rasp.local

---
#### SSH
>$ ssh root@192.168.0.109
pw: p@ssword

##### Sending files through SSH
>$ scp < source> < destination>

##### To copy a file from B to A while logged into B
>$ scp /path/to/file username@a:/path/to/destination
##### To copy a file from B to A while logged into A
>$ scp username@b:/path/to/file /path/to/destination

---

#### VNC
>$ pi
pw: user
pw: p@ssword.

---
  
#### Apache server
##### Installation
>$ sudo apt-get install apache2 -y
$ sudo service apache2 start
$ sudo service apache2 restart
$ sudo service apache2 stop
  
##### Installation - PHP
>$ apt-get install php libapache2-mod-php -y

##### Restarting the DNS responder: (Mac)
>$sudo killall -HUP mDNSResponder

---

#### DNS config
>$ nano /etc/resolv.conf

---
  
#### RPi - Remove no longer needed packages:
>$ apt autoremove

---
  
### Raspberry Pi - Bacis commands
#### Shutdown
>$ sudo poweroff

#### Restart
>$ sudo reboot

#### Root authority
>$ sudo su

#### Chaneg password
>$ sudo passwd
$ sudo raspi-config

---
  
### Terminal - Editing
#### Delete
>$ sudo rm -rf /etc/folder or .something

#### Create new folder  
>$ sudo mkdir /etc

#### Copy file
>$ cp -i /etc

The dot "." is the content to copy here:
>$ sudo cp -a MainDatabase/. /pi/gogs-repositories/happyadmin/

Copy the whole folder to another place
>$ sudo cp -a MainDatabase /pi/gogs-repositories/happyadmin/

#### Create new file
>$ touch sample.txt

#### Rename file
$ mv "old location" "new location"

#### Find
>$ find . -name “smth.txt”
 
#### Hidden files
>$ ls -a

---
  
### Downloading by link: (exampe)
>$ wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip

#### Extract file
>$ sudo apt-get install unzip
$ unzip file.zip -d destination_folder
  
#### Tar.gz
>$ tar -xvzf community_images.tar.gz

---
  
### With the following command, you can determine if your OS is 32 or 64 bit:
>$ getconf LONG_BIT
$ uname -a

---
  
### Git Raspberry Pi - Repo Setup:
#### Server side - create a folder
>$ mkdir repoName 
$ cd repoName
$ git init —bare

#### Client side - create a folder
>$ mkdir gitName
$ cd gitName
$ git init
  
#### Create a 'file.smth'
>$ touch html.txt
$ nano html.txt (write something into)
$ git remote add repoName pi@192.168.1.7:/home/pi/git/repoName (pi@rasp.local or root@rasp.local)
$ git add .
$ git commit -m “My first commit”
$ git push repoName master
  
#### Clone Git
##### Client side (already created folder - optional)
>$ git clone pi@192.168.1.7:/home/pi/git/repoName (pi@rasp.local or root@rasp.local)

---

### Mount Device
##### Current Device Attached
>$ sudo blkid

##### Checking partitions:
>$ sudo fdisk -l

##### Mounting:
>$ sudo mount /dec/sda1 /mnt
$ chmod 775 /mnt

----

##### Update and upgrade error RPi3
- Could not get lock /var/lib/apt/lists/lock - open (11: Resource temporarily unavailable)
>$ sudo rm /var/lib/apt/lists/* -vf 
>$ sudo apt-get update
