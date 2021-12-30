---
layout: post
title: "Web server dependencies"
description: "Install and setup web dependencies via terminal on linux"
tags: [ Shell, Command, Linux, APT packages]
---


#### (network statistics) is a command line tool for monitoring network connections
>$ sudo apt-cache search netstat

---

#### Install an example

##### Examples:
>net-tools - NET-3 networking toolkit
nicstat - print network traffic statistics
bwm-ng - small and simple console-based bandwidth monitor
gnome-nettool - network information tool for GNOME
golang-github-aelsabbahy-gonetstat-dev - Netstat implementation in Go
golang-github-mwitkow-go-conntrack-dev - Go middleware for net.Conn tracking
libparse-netstat-perl - module to parse the output of the "netstat" command
netstat-nat - tool that display NAT connections
unhide - Forensic tool to find hidden processes and ports
whichman - Fault tolerant search utilities: whichman, ftff, ftwhich

#### Installation (- example)
>$ sudo apt-get install net-tools

---

## Installation of the MySQL
>$ sudo /opt/lampp/xampp startmysql

Terminal -  _XAMPP: Starting MySQL...already running.

---

## Install MariaDB 
>$ sudo apt update
>$ sudo apt-get install mariadb-server mariadb-client

#### Usage of MariaDB
>$ systemctl stop mysql.service
>$ systemctl start mysql.service
>$ systemctl enable mysql.service

#### Secure MariaDB server (optional)
>$ sudo mysql_secure_installation

When prompted, answer the questions below by following the guide.

#### Enter current password for root (enter for none): Just press the Enter
    Set root password? [Y/n]: Y
    New password: Enter password
    Re-enter new password: Repeat password
    Remove anonymous users? [Y/n]: Y
    Disallow root login remotely? [Y/n]: Y
    Remove test database and access to it? [Y/n]:  Y
    Reload privilege tables now? [Y/n]:  Y
  
  #### To logon to MariaDB database server, run the commands below
  >$ sudo mysql -u root -p
  
  #### Change the GLOBAL innodeb_file_per_table to On..
  SET GLOBAL innodb_file_per_table = ON;
  
  #### Then create a database called 'gitea'
  CREATE DATABASE gitea;
  
  #### Create a database user called giteauser with new password
  CREATE USER 'giteauser'@'localhost' IDENTIFIED BY 'new_password_here';
  
  #### Then grant the user full access to the database
  GRANT ALL ON gitea.* TO 'giteauser'@'localhost' IDENTIFIED BY 'user_password_here' WITH GRANT OPTION;
  
  #### Next, run the commands below to update the database character set..
  ALTER DATABASE gitea CHARACTER SET = utf8mb4 COLLATE utf8mb4_unicode_ci;
  
  #### Finally, save your changes and exit.
  FLUSH PRIVILEGES;
  EXIT;
  
  #### Next, run the commands below to open MariaDB default config file…
  >$ sudo nano /etc/mysql/mariadb.conf.d/50-server.cnf
  
  #### Then add the lines below and save…
  innodb_file_format = Barracuda
  innodb_large_prefix = 1
  innodb_default_row_format = dynamic
  #### Restart MariaDB after that…
  
  ---

  
