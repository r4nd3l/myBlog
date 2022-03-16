---
layout: post
title: "Use JS variable in Vue"
description: "A way to import JS variable from external script into Vue"
tags: [ Web, Development, JavaScript, Vue ]
---

A simple way to get your (Vanilla) JS variables from an external script and import them into Vue

#### my_variables.js

{% include codeHeader.html %}
```
export const iconImage = "/waws/get-icon-image?image=";
```
#### my_vue.vue

##### Template

{% include codeHeader.html %}
```
<template>
	<img v-bind:src="iconImage" width="64" height="64" />
</template>
```

##### Script

{% include codeHeader.html %}
```
<script>
import { iconImage } from "./../../libs/my_variables.js";

export default {
  name: "my_vue",
  data() {
   return {
     iconImage: iconImage,
   }
  },
  filters: {},
  mounted() {},
  props: {},
};
</script>
```