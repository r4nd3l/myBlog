---
layout: post
title: "How to pass data from Vuejs to Blade view? vol. 2"
description: "Another shortcut to bind and pass data from vue component to (Laravel) Blade"
tags: [JavaScript, Web, Development, Vue]
---

In Vue component

```
<template>
    <h4>{{ car.title }}</h4>
</template>

<script>
    export default {
        data() {
            return {
                dataPass: "",
            }
        },
        watch: {
            dataPass(item){
                document.querySelector("#vueToBlade").innerText = item;
            }
        },
        async mounted(){
            this.dataPass = this.car.title;
        },
        props: {
            car: Object,
        },
    }
</script>
```

In (Laravel) Blade

```
<span id="vueToBlade">Demo car</span>
```