---
layout: post
title: "How to pass data from Vuejs to Blade view?"
description: "A shortcut to bind and pass data from vue component to (Laravel) Blade"
tags: [JavaScript, Web, Development, Vue]
---

Create a variable in the root component data object and change it from the child component so assuming `resources/js/components/ExampleComponent.vue` like this

```
<template>
    <div class="container">
        <input v-model="field" type="text">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                field: ''
            }
        },
        watch: {
            field: function (val) {
                this.$root.bladeValue = val;
            }
        }
    }
</script>
```

and a `resources/js/app.js` like so

```
window.Vue = require('vue');
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    el: '#app',
    data() {
        return {
            bladeValue: ''
        }
    }
});
```

and a blade view like so `resources/views/welcome.blade.php`

```
<div id="app">
    <example-component></example-component>
    <h1>@{{ bladeValue }}</h1>
</div>
<script src="/js/app.js"></script>
```

Then `bladeValue` will be binded to `field` in `ExampleComponent`