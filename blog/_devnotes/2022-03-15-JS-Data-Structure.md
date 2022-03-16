---
layout: post
title: "JS data structures"
description: "JavaScript data structures in general as an exercise/practice"
tags: [JavaScript, Web, Development]
---

When working with JavaScript, you'll work with data structures all the time. That includes built-in ones like Arrays, Objects, Maps or Sets but - especially if you dive deeper into JavaScript - also custom data structures like Linked Lists, Trees or Graphs.

***

> Arrays

{% include codeHeader.html %}
```
    const names = ['Max', 'Manu', 'Julie', 'Max'];
    // Index starts at zero
    console.log(names[1]);
    console.log(names.length);

    for(const el of names){
        console.log(el);
    }

    names.push('Julie');
    console.log(names.length);

    const julieIndex = names.findIndex(el => el === 'Julie');
    names.splice(2, 1);
    console.log(names);
```

***

> Sets

{% include codeHeader.html %}
```
    const ids = new Set();

    ids.add('abc');
    ids.add(1);
    ids.add('bb2');
    ids.add(1);

    for(const el of ids){
        console.log(el);
    }

    console.log(ids.has('abc'));

    ids.delete('bb2');

    console.log(ids);
```

***

> Maps

{% include codeHeader.html %}
```
    const resultData = new Map();

    resultData.set('average', 1.53);
    resultData.set('lastResult', null);

    const germany = {name: 'Germany', population: 82};

    resultData.set(germany, 0.89);

    for (const el of resultData){
        console.log(el);
    }

    resultData.set('average', 33.89);
    console.log(resultData);

    console.log(resultData.get('average'));
    console.log(resultData.average);

    resultData.delete({name: 'Germany', population: 82});
    console.log(resultData);
```

***

> Objects

{% include codeHeader.html %}
```
    const person = {
        firstName: 'Max',
        age: 31,
        hobbies: ['Sports', 'Cooking'],
        age: 32,
        greet(){
            console.log('Hi, I am ' + this.firstName);
        },
    };
    person.lastName = 'Schwarz';

    delete person.age;

    console.log(person);
    person.greet();
```

***

> Linked lists

{% include codeHeader.html %}
```
    class LinkedList{
        constructor(){
            this.head = null; // First element of the list
            this.tail = null; // Last element of the list
        }

        append(value){
            const newNode = { value: value, next: null };

            if(this.tail){
                this.tail.next = newNode;
            }
            this.tail = newNode;
            if(!this.head){
                this.head = newNode;
            }
        }

        prepend(value){
            const newNode = { value: value, next: this.head };

            this.head = newNode;
            if(!this.tail){
                this.tail = newNode;
            }
        }

        insertAfter(value, afterValue){
            const existingNode = this.find(afterValue);

            if(existingNode){
                const newNode = { value: value, next: existingNode.next };
                existingNode.next = newNode;
            }
        }

        find(value){
            if(!this.head){
                return null;
            }

            let curNode = this.head;

            while(curNode){
                if(curNode.value === value){
                    return curNode;
                }
                curNode = curNode.next;
            }

            return null;
        }

        delete(value){
            if(!this.head){
                return;
            }

            while(this.head && this.head.value === value){
                this.head = this.head.next;
            }

            let curNode = this.head;

            while(curNode.next){
                if(curNode.next.value === value){
                    curNode.next = curNode.next.next;
                }else{
                    curNode = curNode.next;
                }
            }

            if(this.tail.value === value){
                this.tail = curNode;
            }
        }

        toArray(){
            const elements = [];

            let curNode = this.head;
            while(curNode){
                elements.push(curNode);
                curNode = curNode.next;
            }

            return elements;
        }
    }

    const linkedList1 = new LinkedList();
    linkedList1.append(1);
    linkedList1.append('hello there');
    linkedList1.append('Max');
    linkedList1.append('Max');
    linkedList1.append(true);
    linkedList1.append(18.51);
    linkedList1.append('First value!');
    linkedList1.append('First value!');

    console.log(linkedList1.toArray());

    linkedList1.delete('Max');
    linkedList1.delete('First value!');
    linkedList1.delete(18.51);

    console.log(linkedList1.toArray());
    console.log(linkedList1.find('Max'));
    console.log(linkedList1.find('hello there'));

    linkedList1.insertAfter('new value -1', 1);
    linkedList1.insertAfter('new value -1', 'hello there');

    console.log(linkedList1.toArray());
```