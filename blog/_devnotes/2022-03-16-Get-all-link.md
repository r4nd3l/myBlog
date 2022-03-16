---
layout: post
title: "Get all the links from a page"
description: "Collect every single link from a page which contain a title"
tags: [JavaScript, Web, Development]
---

Collect all the links from a page which has a "title" attribute and display them on a new tab page in the browser

Copy paste the code below into the console under the devtools in the browser

***

> JavaScript

```
    var x = document.querySelectorAll('a[href*="/view/"][title]');
    var myarray = []
    for (var i=0; i<x.length; i++){
    var nametext = x[i].textContent;
    var cleantext = nametext.replace(/\s+/g, ' ').trim();
    var cleanlink = x[i].href;
    myarray.push([cleantext,cleanlink]);
    };
    function make_table() {
        var table = '<table><thead><th>Name</th><th>Links</th></thead><tbody>';
    for (var i=0; i<myarray.length; i++) {
                table += '<tr><td>'+ myarray[i][0] + '</td><td>'+ '<a href="' + myarray[i][1] + '" target="_blank">' + myarray[i][1] + '</a>' + '</td></tr>';
        };
    
        var w = window.open("");
    w.document.write(table); 
    }
    make_table()
```