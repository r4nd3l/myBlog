---
layout: post
title: Split ZIP files 
description: "Install and setup git-ftp on Linux"
tags: [ Git , shell , script ]
---

Git-FTP install 
curl https://raw.githubusercontent.com/git-ftp/git-ftp/master/git-ftp > /bin/git-ftp
chmod 755 /bin/git-ftp

On Ubuntu:

{% include codeHeader.html %}
```
$ sudo apt-get install git-ftp
$ git-ftp --version
```

Git-FTP method https://git-ftp.github.io/
git-ftp method

- git init 
- git status
- git add .
- git commit -m "commit title"

- git config git-ftp.url 'ftp.example.net'
    or sub-domain
- git config git-ftp.url 'ftp.example.net/public_html/beta'
- git config git-ftp.user 'ftp-user'
- git config git-ftp.password 'secr3t'

(just onces)
- git ftp init

Any other changes afterwards
- git status
- git add .
- git commit -m "commit title"
- git ftp push (or sync)