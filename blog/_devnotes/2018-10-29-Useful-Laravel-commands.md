---
layout: post
title: "Useful Laravel commands"
description: "Handy commands for Laravel in terminal"
tags: [PHP, Shell, Terminal, Web, Development, Linux]
categories: [PHP, Shell, Terminal, Web, Development, Linux]
---

# Useful Laravel commands (XAMPP)
---

#### Terminal commands in the directory
>$ sudo apt install composer
>$ composer update
>$ sudo apt-get install php7.2-mysql
>$ sudo apt-get install phpunit
>$ sudo apt-get install php-mbstring
>
##### Optional for permission issues
>$ sudo chmod -R 755 /opt/lampp/htdocs/Git
>$ php /usr/bin/composer update
>

## Isntall and run XAMPP by terminal
>$ cd Downloads
>$ sudo chmod +x xampp-linux-x64-7.2.3-0-installer.run
>$ sudo ./xampp-linux-x64-7.2.3-0-installer.run

---

## Configure Apache - if issued
(Stop from the root of the apache)
>$ sudo /etc/init.d/apache2 stop

or

>$ sudo service apache2 stop

or

>$ sudo systemctl stop apache2.service

or

>$ sudo apache2ctl stop

(Then start from the root of the xampp)
>$ sudo /opt/lampp/xampp start
---
### If all of the above are not working to shut it down
>$ ps aux | grep http
>$ sudo kill < Pid >

Moreover (if the issue is  - /etc/lighttpd/lighttpd.conf)
>$ sudo update-rc.d -f lighttpd remove

This is a script which will remove the lighttpd start up script

---

### If it is still not 
The problem is aussmingly the "lighttpd" which is located in "/etc/init.d/lighttpd"
>$ sudo /etc/init.d/lighttpd stop

Disable startup on boot
>$ sudo systemctl disable lighttpd

---

#### Auto starting on boot
This disables apache2 at startup but is not removed so it can be enabled again
>$ sudo update-rc.d apache2 disable

To remove the apache2 startup scripts do the following
>$ sudo update-rc.d -f  apache2 remove
---

#### Disable MysSql upstart
This disable the mysql at startup
>$ sudo systemctl disable mysql.service
---

##### Note
Table in the Database should be set via XAMPP Apache Manager before the terminal run the 'startmysql' command - otherwiser the /phpmyadmin will be unreachable!
