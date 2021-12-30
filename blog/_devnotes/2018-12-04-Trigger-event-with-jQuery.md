---
layout: post
title: "Trigger event with jQuery"
description: "Trigger event when user scroll to specific element - with jQuery"
tags: [ Web, Development, JavaScript]
---

jQuery:

```
    $(window).scroll(function() {
    var heightTop = $('#fab').offset().top,
    outHeight = $('#fab').outerHeight(),
    wHeight = $(window).height(),
    wScroll = $(this).scrollTop();
    if (wScroll > (heightTop+outHeight-wHeight) && (heightTop > wScroll) && (wScroll+wHeight > heightTop+outHeight)){
        $('.telegram_button').fadeOut("slow");
    } else {
        $('.telegram_button').fadeIn("slow");
    }
    });
```

HTML:

```
    <!-- Floating Action Button - FAB - Telegram  -->
    <div id="fab">
    <img class="telegram_button" src="{{ URL::to('img/telegram_logo.svg') }}" data-toggle="popover" data-placement="left" title="Need help?" data-content="<a href='https://t.me/envienta' title='telegram link'><button class='btn btn-primary btn-sm'>Join </button></a> our Telegram channel!"  width="64" height="64" alt="Telegram">
    </div>
```