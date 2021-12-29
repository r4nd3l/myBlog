---
layout: post
title: "30 CSS Selectors"
description: "Wide variety of CSS selectors, special ones as well"
tags: [ CSS , selector ]
categories: [CSS, CSS ninja, Code snippet]
---
# 30 CSS Selectors
>Source: [The 30 CSS Selectors You Must Memorize](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)


## CSS Selectors

So you learned the base `id`, `class`, and `descendant` selectors—and then called it a day? If so, you're missing out on an enormous level of flexibility. While many of the selectors mentioned in this article are part of the CSS3 spec, and are, consequently, only available in modern browsers, you owe it to yourself to commit these to memory.

##  1. *
    
```
    * {
     margin: 0;
     padding: 0;
    }
```

Let's knock the obvious ones out, for the beginners, before we move onto the more advanced selectors.

The star symbol will target every single element on the page. Many developers will use this trick to zero out the `margin`s and `padding`. While this is certainly fine for quick tests, I'd advise you to never use this in production code. It adds too much _weight_ on the browser, and is unnecessary.

The `*` can also be used with child selectors. 
    
```
    #container * {
     border: 1px solid black;
    }
```

This will target every single element that is a child of the `#container` `div`. Again, try not to use this technique very much, if ever.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/star.html?_ga=2.93315613.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE6+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  2. #X
    
```
    #container {
       width: 960px;
       margin: auto;
    }
```

Prefixing the hash symbol to a selector allows us to target by `id`. This is easily the most common usage, however be cautious when using `id` selectors.

> Ask yourself: do I absolutely need to apply an `id` to this element in order to target it?

`id` selectors are rigid and don't allow for reuse. If possible, first try to use a tag name, one of the new HTML5 elements, or even a pseudo-class.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/id.html?_ga=2.71615891.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE6+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  3. .X
    
```
    .error {
      color: red;
    }
```

This is a `class` selector. The difference between `id`s and `class`es is that, with the latter, you can target multiple elements. Use `class`es when you want your styling to apply to a group of elements. Alternatively, use `id`s to find a needle-in-a-haystack, and style only that specific element.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/class.html?_ga=2.71615891.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE6+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

##  4. X Y
    
```
    li a {
      text-decoration: none;
    }
```

The next most comment selector is the `descendant` selector. When you need to be more specific with your selectors, you use these. For example, what if, rather than targeting _all_ anchor tags, you only need to target the anchors which are within an unordered list? This is specifically when you'd use a descendant selector. 

> **Pro-tip** \- If your selector looks like `X Y Z A B.error`, you're doing it wrong. Always ask yourself if it's absolutely necessary to apply all of that _weight_.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/descend.html?_ga=2.71615891.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE6+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  5. X
    
```
    a { color: red; }
    ul { margin-left: 0; }
```

What if you want to target all elements on a page, according to their `type`, rather than an `id` or `class`name? Keep it simple, and use a type selector. If you need to target all unordered lists, use `ul {}`.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/tagName.html?_ga=2.63423791.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE6+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  6. X:visited and X:link
    
```
    a:link { color: red; }
    a:visited { color: purple; }
```

We use the `:link` pseudo-class to target all anchors tags which have yet to be clicked on.

Alternatively, we also have the `:visited` pseudo class, which, as you'd expected, allows us to apply specific styling to only the anchor tags on the page which _have_ been clicked on, or _visited_.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/links.html?_ga=2.63423791.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE7+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  7. X + Y
    
```    
    ul + p {
       color: red;
    }
```

This is referred to as an adjacent selector. It will select _only_ the element that is immediately preceded by the former element. In this case, only the first paragraph after each `ul` will have red text.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/adjacent.html?_ga=2.63423791.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE7+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  8. X > Y
    
```    
    div#container > ul {
      border: 1px solid black;
    }
```

The difference between the standard `X Y` and `X > Y` is that the latter will only select direct children. For example, consider the following markup.
    
```
    <div id="container">
       <ul>
          <li> List Item
            <ul>
               <li> Child </li>
            </ul>
          </li>
          <li> List Item </li>
          <li> List Item </li>
          <li> List Item </li>
       </ul>
    </div>
```

A selector of `#container > ul` will only target the `ul`s which are direct children of the `div` with an `id` of `container`. It will not target, for instance, the `ul` that is a child of the first `li`. 

For this reason, there are performance benefits in using the child combinator. In fact, it's recommended particularly when working with JavaScript-based CSS selector engines.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/childcombinator.html?_ga=2.63423791.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE7+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  9. X ~ Y
    
```
    ul ~ p {
       color: red;
    }
```

This sibling combinator is similar to `X + Y`, however, it's less strict. While an adjacent selector (`ul + p`) will only select the first element that is _immediately_ preceded by the former selector, this one is more generalized. It will select, referring to our example above, any `p` elements, as long as they follow a `ul`. 

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/generalcombinator.html?_ga=2.62777004.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE7+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  10. X[title]
    
```
    a[title] {
       color: green;
    }
```

Referred to as an _attributes selector_, in our example above, this will only select the anchor tags that have a `title` attribute. Anchor tags which do not will not receive this particular styling. But, what if you need to be more specific? Well...

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes.html?_ga=2.62777004.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE7+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  11. X[href="foo"]
    
```
    a[href="http://net.tutsplus.com"] {
      color: #1f6053; /* nettuts green */
    }
```

The snippet above will style all anchor tags which link to __; they'll receive our branded green color. All other anchor tags will remain unaffected.

> Note that we're wrapping the value in quotes. Remember to also do this when using a JavaScript CSS selector engine. When possible, always use CSS3 selectors over unofficial methods.

This works well, though, it's a bit rigid. What if the link does indeed direct to Nettuts+, but, maybe, the path is _nettuts.com_ rather than the full url? In those cases we can use a bit of the regular expressions syntax.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes2.html?_ga=2.62777004.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE7+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  12. X[href*="nettuts"]
    
```
    a[href*="tuts"] {
      color: #1f6053; /* nettuts green */
    }
```

There we go; that's what we need. The star designates that the proceeding value must appear _somewhere_ in the attribute's value. That way, this covers _nettuts.com_, _net.tutsplus.com,_ and even _tutsplus.com_. 

Keep in mind that this is a broad statement. What if the anchor tag linked to some non-Envato site with the string _tuts_ in the url? When you need to be more specific, use `^` and `$`, to reference the beginning and end of a string, respectively.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes3.html?_ga=2.62777004.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE7+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  13. X[href^="http"]
    
```
    a[href^="http"] {
       background: url(path/to/external/icon.png) no-repeat;
       padding-left: 10px;
    }
```

Ever wonder how some websites are able to display a little icon next to the links which are external? I'm sure you've seen these before; they're nice reminders that the link will direct you to an entirely different website.

This is a cinch with the carat symbol. It's most commonly used in regular expressions to designate the beginning of a string. If we want to target all anchor tags that have a `href` which begins with `http`, we could use a selector similar to the snippet shown above.

> Notice that we're not searching for `http://`; that's unnecessary, and doesn't account for the urls that begin with `https://`. 

Now, what if we wanted to instead style all anchors which link to, say, a photo? In those cases, let's search for the _end_ of the string.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes4.html?_ga=2.62816684.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE7+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  14. X[href$=".jpg"]
    
```
    a[href$=".jpg"] {
       color: red;
    }
```

Again, we use a regular expressions symbol, `$`, to refer to the end of a string. In this case, we're searching for all anchors which link to an image -- or at least a url that ends with `.jpg`. Keep in mind that this certainly won't work for `gifs` and `pngs`.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes5.html?_ga=2.62816684.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE7+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  15. X[data-*="foo"]
    
```
    a[data-filetype="image"] {
       color: red;
    }
```

Refer back to number eight; how do we compensate for all of the various image types: `png`, `jpeg`, `jpg`, `gif` ? Well, we could create multiple selectors, such as:
    
```
    a[href$=".jpg"],
    a[href$=".jpeg"],
    a[href$=".png"],
    a[href$=".gif"] {
       color: red;
    }
```

But, that's a pain in the butt, and is inefficient. Another possible solution is to use custom attributes. What if we added our own `data-filetype` attribute to each anchor that links to an image?
    
```
    <a href="path/to/image.jpg" data-filetype="image"> Image Link </a> 
```

Then, with that _hook_ in place, we can use a standard attributes selector to target only those anchors. 
    
```
    a[data-filetype="image"] {
       color: red;
    }
```

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes6.html?_ga=2.62816684.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE7+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  16. X[foo~="bar"]
    
```
     a[data-info~="external"] {
       color: red;
    }
    
    a[data-info~="image"] {
       border: 1px solid black;
    }
```

Here's a special one that'll impress your friends. Not too many people know about this trick. The tilda (`~`) symbol allows us to target an attribute which has a spaced-separated list of values. 

Going along with our custom attribute from number fifteen, above, we could create a `data-info` attribute, which can receive a space-separated list of anything we need to make note of. In this case, we'll make note of external links and links to images -- just for the example.
    
```
    "<a href="path/to/image.jpg" data-info="external image"> Click Me, Fool </a>
```

With that markup in place, now we can target any tags that have either of those values, by using the ~ attributes selector trick.
    
```
    /* Target data-info attr that contains the value "external" */
    a[data-info~="external"] {
       color: red;
    }
    
    /* And which contain the value "image" */
    a[data-info~="image"] {
      border: 1px solid black;
    }
```

Pretty nifty, ay?

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/attributes7.html?_ga=2.158630330.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE7+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  17. X:checked
    
```
    input[type=radio]:checked {
       border: 1px solid black;
    }
```

This pseudo class will only target a user interface element that has been _checked_ \- like a radio button, or checkbox. It's as simple as that.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/checked.html?_ga=2.158630330.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE9+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  18. X:after

The `before` and `after` pseudo classes kick butt. Every day, it seems, people are finding new and creative ways to use them effectively. They simply generate content around the selected element.

Many were first introduced to these classes when they encountered the clear-fix hack.
    
```
    .clearfix:after {
        content: "";
        display: block;
        clear: both;
        visibility: hidden;
        font-size: 0;
        height: 0;
        }
    
    .clearfix { 
       *display: inline-block; 
       _height: 1%;
    }
```

This _hack_ uses the `:after` pseudo class to append a space after the element, and then clear it. It's an excellent trick to have in your tool bag, particularly in the cases when the `overflow: hidden;` method isn't possible.

For another creative use of this, [refer to my quick tip on creating shadows][20]. 

> According to the CSS3 Selectors specification, you should technically use the pseudo element syntax of two colons `::`. However, to remain compatible, the user-agent will accept a single colon usage as well. In fact, at this point, it's smarter to use the single-colon version in your projects.

###  Compatibility 

* IE8+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  19. X:hover
    
```
    div:hover {
      background: #e3e3e3;
    }
```

Oh come on. You know this one. The official term for this is `user action pseudo class`. It sounds confusing, but it really isn't. Want to apply specific styling when a user hovers over an element? This will get the job done!

> Keep in mind that older version of Internet Explorer don't respond when the `:hover` pseudo class is applied to anything other than an anchor tag. 

You'll most often use this selector when applying, for example, a `border-bottom` to anchor tags, when hovered over.
    
```
    a:hover {
     border-bottom: 1px solid black;
    }
```

> **Pro-tip** \- `border-bottom: 1px solid black;` looks better than `text-decoration: underline;`. 

###  Compatibility 

* IE6+ (In IE6, :hover must be applied to an anchor element) 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  20. X:not(selector)
    
```
    div:not(#container) {
       color: blue;
    }
```

The `negation` pseudo class is particularly helpful. Let's say I want to select all divs, except for the one which has an `id` of `container`. The snippet above will handle that task perfectly.

Or, if I wanted to select every single element (not advised) except for paragraph tags, we could do:
    
```
    *:not(p) {
      color: green;
    }
```

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/not.html?_ga=2.63417775.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE9+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  21. X::pseudoElement
    
```
    p::first-line {
       font-weight: bold;
       font-size: 1.2em;
    }
```

We can use pseudo elements (designated by `::`) to style fragments of an element, such as the first line, or the first letter. Keep in mind that these must be applied to block level elements in order to take effect.

> A pseudo-element is composed of two colons: `::`

#### Target the First Letter of a Paragraph
    
```
    p::first-letter {
       float: left;
       font-size: 2em;
       font-weight: bold;
       font-family: cursive;
       padding-right: 2px;
    }
```

This snippet is an abstraction that will find all paragraphs on the page, and then sub-target only the first letter of that element. 

This is most often used to create newspaper-like styling for the first-letter of an article.

#### Target the First Line of a Paragraph
    
```
    p::first-line {
       font-weight: bold;
       font-size: 1.2em;
    }
```

Similarly, the `::first-line` pseudo element will, as expected, style the first line of the element only. 

> "For compatibility with existing style sheets, user agents must also accept the previous one-colon notation for pseudo-elements introduced in CSS levels 1 and 2 (namely, :first-line, :first-letter, :before and :after). This compatibility is not allowed for the new pseudo-elements introduced in this specification."

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/pseudoElements.html?_ga=2.63417775.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE6+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  22. X:nth-child(n)
    
```
    li:nth-child(3) {
       color: red;
    }
```

Remember the days when we had no way to target specific elements in a stack? The `nth-child` pseudo class solves that!

Please note that `nth-child` accepts an integer as a parameter, however, this is not zero-based. If you wish to target the second list item, use `li:nth-child(2)`. 

We can even use this to select a variable set of children. For example, we could do `li:nth-child(4n)` to select every fourth list item. 

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/nth.html?_ga=2.63417775.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE9+ 
* Firefox 3.5+ 
* Chrome 
* Safari 

---

##  23. X:nth-last-child(n)
    
```
    li:nth-last-child(2) {
       color: red;
    }
```

What if you had a huge list of items in a `ul`, and only needed to access, say, the third to the last item? Rather than doing `li:nth-child(397)`, you could instead use the `nth-last-child` pseudo class.

This technique works almost identically from number sixteen above, however, the difference is that it begins at the end of the collection, and works its way back.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/nthLast.html?_ga=2.63417775.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE9+ 
* Firefox 3.5+ 
* Chrome 
* Safari 
* Opera 

---

##  24. X:nth-of-type(n)
    
```
    ul:nth-of-type(3) {
       border: 1px solid black;
    }
```

There will be times when, rather than selecting a `child`, you instead need to select according to the `type` of element. 

Imagine mark-up that contains five unordered lists. If you wanted to style only the third `ul`, and didn't have a unique `id` to hook into, you could use the `nth-of-type(n)` pseudo class. In the snippet above, only the third `ul` will have a border around it.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/nthOfType.html?_ga=2.96985375.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE9+ 
* Firefox 3.5+ 
* Chrome 
* Safari 

---

##  25. X:nth-last-of-type(n)
    
```
    ul:nth-last-of-type(3) {
       border: 1px solid black;
    }
```

And yes, to remain consistent, we can also use `nth-last-of-type` to begin at the end of the selectors list, and work our way back to target the desired element.

###  Compatibility 

* IE9+ 
* Firefox 3.5+ 
* Chrome 
* Safari 
* Opera 

---

##  26. X:first-child
    
```
    ul li:first-child {
       border-top: none;
    }
```

This structural pseudo class allows us to target only the first child of the element's parent. You'll often use this to remove borders from the first and last list items. 

For example, let's say you have a list of rows, and each one has a `border-top` and a `border-bottom`. Well, with that arrangement, the first and last item in that set will look a bit odd. 

Many designers apply classes of `first` and `last` to compensate for this. Instead, you can use these pseudo classes.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/firstChild.html?_ga=2.96985375.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE7+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  27. X:last-child
    
```
    ul > li:last-child {
       color: green;
    }
```

The opposite of `first-child`, `last-child` will target the last item of the element's parent.

### Example

Let's build a simple example to demonstrate one possible use of these classes. We'll create a styled list item. 

#### Markup
    
```
    <ul>
       <li> List Item </li>
       <li> List Item </li>
       <li> List Item </li>
    </ul>
```

Nothing special here; just a simple list.

#### CSS
    
```
    ul {
     width: 200px;
     background: #292929;
     color: white;
     list-style: none;
     padding-left: 0;
    }
    
    li {
     padding: 10px;
     border-bottom: 1px solid black;
     border-top: 1px solid #3c3c3c;
    }
```

This styling will set a background, remove the browser-default padding on the `ul`, and apply borders to each `li` to provide a bit of depth.

![](https://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/extraBorders.png)

> To add depth to your lists, apply a `border-bottom` to each `li` that is a shade or two darker than the `li`'s background color. Next, apply a `border-top` which is a couple shades _lighter_. 

The only problem, as shown in the image above, is that a border will be applied to the very top and bottom of the unordered list - which looks odd. Let's use the `:first-child` and `:last-child` pseudo classes to fix this.
    
```
    li:first-child {
        border-top: none;
    }
    
    li:last-child {
       border-bottom: none;
    }
```
![](https://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/fixed.png)

There we go; that fixes it!

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/firstChild.html?_ga=2.96985375.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE9+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

Yep - IE8 supported `:first-child`, but not `:last-child`. Go figure.

---

##  28. X:only-child
    
```
    div p:only-child {
       color: red;
    }
```

Truthfully, you probably won't find yourself using the `only-child` pseudo class too often. Nonetheless, it's available, should you need it.

It allows you to target elements which are the _only_ child of its parent. For example, referencing the snippet above, only the paragraph that is the only child of the `div` will be colored, red.

Let's assume the following markup.
    
```
    <div><p> My paragraph here. </p></div>

    <div>
       <p> Two paragraphs total. </p>
       <p> Two paragraphs total. </p>
    </div>
```

In this case, the second `div`'s paragraphs will not be targeted; only the first `div`. As soon as you apply more than one child to an element, the `only-child` pseudo class ceases to take effect.

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/onlyChild.html?_ga=2.96985375.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE9+ 
* Firefox 
* Chrome 
* Safari 
* Opera 

---

##  29. X:only-of-type
    
```
    li:only-of-type {
       font-weight: bold;
    }
```

This structural pseudo class can be used in some clever ways. It will target elements that do not have any siblings within its parent container. As an example, let's target all `ul`s, which have only a single list item. 

First, ask yourself how you would accomplish this task? You could do `ul li`, but, this would target _all_ list items. The only solution is to use `only-of-type`.
    
```
    ul > li:only-of-type {
       font-weight: bold;
    }
```

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/onlyOfType.html?_ga=2.37086240.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE9+ 
* Firefox 3.5+ 
* Chrome 
* Safari 
* Opera 

---

##  30. X:first-of-type

The `first-of-type` pseudo class allows you to select the first siblings of its type. 

#### A Test

To better understand this, let's have a test. Copy the following mark-up into your code editor:
    
```
    <div>
       <p> My paragraph here. </p>
       <ul>
          <li> List Item 1 </li>
          <li> List Item 2 </li>
       </ul>

       <ul>
          <li> List Item 3 </li>
          <li> List Item 4 </li>
       </ul>   
    </div>
```

Now, without reading further, try to figure out how to target only _"List Item 2"_. When you've figured it out (or given up), read on.

#### Solution 1

There are a variety of ways to solve this test. We'll review a handful of them. Let's begin by using `first-of-type`. 
    
```
    ul:first-of-type > li:nth-child(2) {
       font-weight: bold;
    }
```

This snippet essentially says, "find the first unordered list on the page, then find only the immediate children, which are list items. Next, filter that down to only the second list item in that set.

#### Solution 2

Another option is to use the adjacent selector.
    
```
    p + ul li:last-child {
       font-weight: bold;
    }
```

In this scenario, we find the `ul` that immediately proceeds the `p` tag, and then find the very last child of the element.

#### Solution 3

We can be as obnoxious or as playful as we want with these selectors. 
    
```
    ul:first-of-type li:nth-last-child(1) {
       font-weight: bold;   
    }
```

This time, we grab the first `ul` on the page, and then find the very first list item, but starting from the bottom! :)

[View Demo](http://cdn.tutsplus.com/net/uploads/legacy/840_cssSelectors/selectors/firstOfType.html?_ga=2.37086240.1488460991.1553001117-779650368.1552747267)

###  Compatibility 

* IE9+ 
* Firefox 3.5+
* Chrome 
* Safari 
* Opera 

---

##  30. + 1 * + *

The 'lobotomized' owls. This would, as with standard prescriptive styling, become verbose very quickly if we were to create rules for each different element pairing within the interface. Hence, we adopt the aforementioned universal selector, creating our owl face. The axiom is as follows: “All elements in the flow of the document that proceed other elements must receive a top margin of one line.”

```
  * + * {
	  margin-top: 1.5em;
  }
```
##### COMPLETENESS
Assuming that your paragraphs’ `font-size` is 1 `em` and its `line-height` is 1.5, we just set a default margin of one line between all successive flow elements of all varieties occurring in any order. Neither we developers nor the folks building content for the project have to worry about any elements being forgotten and not adopting at least a standard margin when rendered one after the other. To achieve this the prescriptive way, we’d have to anticipate specific elements and give them individual margin values. Boring, verbose, and liable to be incomplete.

Instead of writing styles, we’ve created a style axiom: an overarching principle for the layout of flow content. It’s highly maintainable, too; if you change the `line-height`, just change this singular `margin-top` value to match.

##### CONTEXTUAL AWARENESS
It’s better than that, though. By applying margin between elements only, we don’t generate any redundant margin (exposed glue) destined to combine with the padding of parent elements. Compare solution (a), which adds a top margin to all elements, with solution (b), which uses the owl selector.

![](https://alistapart.com/wp-content/uploads/2014/10/owl_1.png)
>The diagrams in the left column show margin in dark grey and padding in light gray.

Now consider how this behaves in regard to nesting. As illustrated, using the owl selector and just a margin-top value, no first or last element of a set will ever present redundant margin. Whenever you create a subset of these elements, by wrapping them in a nested parent, the same rules that apply to the superset will apply to the subset. No margin, regardless of nesting level, will ever meet padding. With a sort of algorithmic elegance, we protect against compound whitespace throughout our interface.

![](https://alistapart.com/wp-content/uploads/2014/10/owl_2.png)

This is eminently less verbose and more robust than approaching the problem unaxiomatically and removing the leftover glue after the fact, as Chris Coyier reluctantly proposed in “Spacing The Bottom of Modules”. It was this article, I should point out, that helped give me the idea for the lobotomized owl.

```
  .module > *:last-child,
  .module > *:last-child > *:last-child,
  .module > *:last-child > *:last-child > *:last-child {
    margin: 0;
  }
```
Note that this only works having defined a “module” context (a big ask of a content editor), and requires estimating possible nesting levels. Here, it supports up to three.

##### Exception-driven design
So far, we’ve not named a single element. We’ve simply written a rule. Now we can take advantage of the owl selector’s low specificity and start judiciously building in exceptions, taking advantage of the cascade rather than condemning it as other methods do.

##### BOOK-LIKE, JUSTIFIED PARAGRAPHS

```
  p {
    text-align: justify;
  }

  p + p {
  margin-top: 0;
  text-indent: 2em;
  }
```
Note that only successive paragraphs are indented, which is conventional—another win for the adjacent sibling combinator.

##### COMPACT MODULES
```
  .compact * + * {
    margin-top: 0.75em;
  }
```
You can employ a little class-based object orientation if you like, to create a reusable style for more compact modules. In this example, all elements that need margin receive a margin of only half a line.

##### WIDGETS WITH POSITIONING
```
  .margins-off > * {
    margin-top: 0;
  }
```
The owl selector is an expressive selector and will affect widgets like maps, where everything is positioned exactly. This is a simple off switch. Increasingly, widgets like these will occur as web components where our margin algorithm will not be inherited anyway. This is thanks to the style encapsulation feature of Shadow DOM.

##### The beauty of ems
Although a few exceptions are inevitable, by harnessing the em unit in our margin value, margins already adjust automatically according to another property: `font-size`. In any instances that we adjust font-size, the margin will adapt to it: one-line spaces remain one-line spaces. This is especially helpful when setting an increased or reduced body `font-size` via a `@media` query.

When it comes to headings, there’s still more good fortune. Having set heading font sizes in your stylesheet in `em`s, appropriate margin (leading whitespace) for each heading has been set without you writing a single line of additional code.

![](https://alistapart.com/wp-content/uploads/2014/10/owl_3.png)

##### Phrasing elements
This style declaration is intended to be inherited. That is how it, and CSS in general, is designed to work. However, I appreciate that some will be uncomfortable with just how voracious this selector is, especially after they have become accustomed to avoiding inheritance wherever possible.

I have already covered the few exceptions you may wish to employ, but, if it helps further, remember that phrasing elements with a typical display value of `inline` will inherit the top margin but be unaffected in terms of layout. Inline elements only respect horizontal margin, which is as specified and standard behavior across all browsers.

![](https://alistapart.com/wp-content/uploads/2014/10/owl_4.png)

If you find yourself overriding the owl selector frequently, there may be deeper systemic issues with the design. The owl selector deals with flow content, and flow content should make up the majority of your content. I don’t advise depending heavily on positioned content in most interfaces because they break implicit flow relationships. Even grid systems, with their floated columns, should require no more than a simple `.row > *` selector applying `margin-top: 0` to reset them.

![](https://alistapart.com/wp-content/uploads/2014/10/owl_5.png)

---



