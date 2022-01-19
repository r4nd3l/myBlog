---
layout: post
title: "Ubuntu upgrade issue"
description: "0 upgraded, 0 newly installed, 0 to remove and 1 not upgraded"
tags: [ Ubuntu, Command, Terminal ]
---

*apt upgrade* will tell you what it would like to do, including package upgrades; and this will include a list of packages it won’t upgrade:

```
$ sudo apt upgrade -o APT::Get::Show-Upgraded=true
The following packages were automatically installed and are no longer required:
  [any packages which could be auto-removed]
Use 'sudo apt autoremove' to remove them.
The following NEW packages will be installed:
  [any packages which will be installed]
The following packages have been kept back:
  [any packages which are upgradeable but won’t be upgraded]
The following packages will be upgraded:
  [any packages which will be upgraded]
NN upgraded, NN newly installed, NN to remove and NN not upgraded.
Need to get ... of archives.
After this operation, ... of additional disk space will be used.
Do you want to continue? [Y/n]
```

(replacing NN with the four different values reflecting the packages listed above).

If this still doesn’t show anything for you, perhaps the non-upgraded package is locally installed (but then, *apt* presumably wouldn’t want to upgrade it...). A good tool to investigate this is *apt-show-versions*:

```
sudo apt install apt-show-versions
```

Then run

```
apt-show-versions | grep "No available version in archive"
```

to see packages which aren’t available in the configured repositories, and

```
apt-show-versions | grep upgradeable
```

to see which packages are upgradeable (regardless of whether *apt* would upgrade them).

You can usually find out more about why the package is not being upgraded by running *apt install* with the package name. If its upgrade would cause another package to be removed, *upgrade* would skip it, but *full-upgrade* would upgrade it.
