---
layout: post
title: "YouTube dl setup"
description: "Install YouTube dl on Linux environment to download videos from YouTube"
tags: [ Linux , Shell , command, YouTube ]
---

### YouTube-dl

Application :[youtube-dl](https://youtube-dl.org/ "youtube-dl.org")

Download Multiple Courses At Once without typing much.

Download`youtube-dl.exe`

1.  Add location of`youtube-dl.exe`to path variable
2.  Create a`youtube-dl.conf`file and put it -

-   On Windows`C:\Users\<user name>\youtube-dl.conf`
-   On Linux`/etc/youtube-dl.conf`

put the following lines in`youtube-dl.conf`
```
-u <Username>
-p <Password>
-i
-c
--no-warnings
--console-title
--batch-file='batch-file.txt'
--max-sleep-interval 80
--min-sleep-interval 60
-o '%(playlist_title)s/%(chapter_number)s - %(chapter)s/%(playlist_index)s-%(title)s.%(ext)s'
-f 'best[height<=720]/worst[height>720]'
```

Put`batch-file.txt`where you want to download the courses.

```
https://app.pluralsight.com/library/courses/project-2016-business-professionals

https://app.pluralsight.com/library/courses/moving-technical-professional-management

https://app.pluralsight.com/library/courses/it-outsourcing-running-initiative
```

Suppose you put the`batch-file.txt`on`D:\Downloads\batch-file.txt`

Open command prompt and go to`D:\Downloads`and run

```
D:\Downloads> youtube-dl
```

Now all your courses will be downloaded on`D:\Downloads`

From now on just update the URLs of the courses you want to download in`batch-file.txt`file, Open command prompt and go to`D:\Downloads`and run

```
D:\Downloads> youtube-dl
```

Important:Pluralsight may block your account if you download too many courses at once. 3--5 is a good size if the course size is average.

PS:Please let me know if you face any problem following the procedure.

Update 1:

1.  Please Use Cookies instead of

```
-u <Username>
-p <Password>
```

The cookies switch should be something like:

```
--cookies 'cookies.txt'
```

You can download the cookies from the browser and place it in the directory where you want to run`youtube-dl`. Google how to download cookies.txt for the browser you are using.

2\. Make Sure Your Browser User Agent & youtube-dl User Agent is same.

```
--user-agent "$UserAgent"
```

To get your current browser user agent go to[What is my User Agent?](https://www.whatismybrowser.com/detect/what-is-my-user-agent "www.whatismybrowser.com")

User agents look something like:

```
Mozilla/5.0 (X11; Linux i686; rv:21.0) Gecko/20100101 Firefox/21.0

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36
```

Now, use it with`---user-agent`.

3\. It might be a little inconvenient but you have to replace:

```
-i
-c
```

With

```
--abort-on-error
```

These steps are to make sure you do not get blocked.

So the resulting`youtube-dl.conf` becomes:

```
--abort-on-error
--no-warnings
--console-title
--batch-file='batch-file.txt'
--user-agent "Mozilla/5.0 (X11; Linux i686; rv:21.0) Gecko/20100101 Firefox/21.0"
--cookies 'cookies.txt'
--socket-timeout 10
--retries 10
--continue
--fragment-retries 10
--min-sleep-interval 60
--max-sleep-interval 80
-f 'best[height<=720]/worst[height>720]'
-o '%(playlist_title)s/%(chapter_number)s - %(chapter)s/%(playlist_index)d-%(title)s.%(ext)s'
```

Still there are few issues remaining. I will In-Shah-Allah get back to you as soon as I get all the answers.