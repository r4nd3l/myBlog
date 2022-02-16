---
layout: post
title: "Match from an array as a reference no2"
description: "Find and match values from an array as a reference and set into a new one"
tags: [JavaScript, Web, Development]
---

template

```
    <div class="bar" :class="(lngLvl(card.level.option_value) >= index )?'':'bar-trp'" v-for="index in 6" :key="index"></div>
```

getLevels

```
    getLevels(){
      return [
        {'lvl': 'A0','barlvl': 1},{'lvl': 'A1','barlvl':1},
        {'lvl': 'A2','barlvl': 2},{'lvl': 'A2+','barlvl': 2},
        {'lvl': 'B1','barlvl': 3},
        {'lvl': 'B1+','barlvl': 4},
        {'lvl': 'B2','barlvl': 5},{'lvl': 'B2+','barlvl': 5},
        {'lvl': 'C1','barlvl': 6},{'lvl': 'C1+','barlvl': 6},{'lvl': 'C2','barlvl': 6},
      ]
    }
```

lngLvl

```
    lngLvl(langLevel){
      const MAX_LVL = 6;
      const sticks = [];
      const availableAllLangLevels = this.getLevels();
        availableAllLangLevels.find((availableAllLangLevels) => {
          if (
            langLevel === availableAllLangLevels.lvl &&
            sticks.length <= MAX_LVL &&
            sticks.indexOf(availableAllLangLevels.barlvl) == -1
          ){
            sticks.push(availableAllLangLevels.barlvl);
          }
      });
      return Math.max.apply(Math, sticks);
    },
```
