---
layout: post
title: "Simple HTTP server"
description: "Host a simple HTTP server via terminal with python"
tags: [ Python, Linux , command , shell ]
---


#### Usage: (In the terminal)
command to navigate to a directory:
>$ cd ~/Downloads/ 

Start a http file server on default 8000 port:
>$ python -m SimpleHTTPServer

Or use a defined port:
>$ python -m SimpleHTTPServer 8088
---

#### To access the file server, go to http://serverip:port in client’s browser.
---

##### If you do not already have a GUI on your Raspbian, or you use SSH to connect to your Raspberry, you can use the following command:

```
  wget -O check_apache.html http://127.0.0.1 
```

This command will save the HTML code of the page in the file “check_apache.html” in the current directory.
So you only have to read the file with the command:
```
  cat ./check_apache.html
```

If you see marked at a location in the code “It works! ” is that Apache is working.