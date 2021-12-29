---
layout: post
title: "CheckBox via jQuery"
description: "SCheckBox - show and hide box with jQuery"
tags: [ Web, Development, JavaScript, jQuery]
categories: [ Web, Development, JavaScript]
---

HTML:

```
<!-- Checkbox placed -->
<input class="form-check-input" type="checkbox" id="maker_check" value="1"onchange="valueChanged()">
<label class="form-check-label" for="defaultCheck1">

<!-- Show/Hide Box -->
<div id="_maker">
  <p>Hello World!</p>  
</div>
```

JS:

```
function valueChanged()
{
  if($('#maker_check').is(":checked"))
  $("#_maker").show();
  else
  $("#_maker").hide();
}
```

jQuery:
```
// jQuery is needed 
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
```