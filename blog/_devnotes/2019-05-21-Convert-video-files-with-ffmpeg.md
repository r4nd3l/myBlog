---
layout: post
title: "Convert video files"
description: "On Ubuntu use terminal to convert video files with ffmpeg"
tags: [ Linux , command , shell ]
---


source: [How To Easily Convert MKV To MP4 From The Terminal - Solid Foundation Web Development](https://solidfoundationwebdev.com/blog/posts/how-to-easily-convert-mkv-to-mp4-from-the-terminal)

>$ ffmpeg -i my_movie.mkv -vcodec copy -acodec copy my_movie.mp4

---

##### Additional options that might be worth considering is setting the Constant Rate Factor, which lowers the average bit rate, but retains better quality. Vary the CRF between around 18 and 24 — the lower, the higher the bitrate.
>$ ffmpeg -i input.mp4 -vcodec libx265 -crf 20 output.mp4

##### Vary the codec as needed - libx264 may be available if libx265 is not, at the cost of a slightly larger resultant file size.

---