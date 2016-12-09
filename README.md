# Design Concepts

Design concepts which can be used for many different projects.
The concepts are html and css (sass) with vanilla javascript (typescript) on the frontend and node as the backend.

##Animation concepts with css 

Animation is time based and can only be placed on a single element. 
Wrap elements with another div if you need to add an animtion after the first. 
Note wrapping can only change the element you add the class to. 
So you can't change the color, size etc of span element(or any element with content) of interest only the position and 
scale of the enclosing container. Also note you can only add one animation to any element at a time.

Transformations are action based. So if you hover over an element then change some characteristics. 
The characteristics must exist for them to be changed.

##Structure of each concepts

Taking into account the limitations of css animations and transformations a simple setup is applied for each page.

You have a single file for

* jade
* css
* js

which will be loaded for each page. A animation class called finish exists on each page. This will trigger end animation 
event handler which will fade out page ready for next page load.


##Build methodology 

It is quite easy to get lost in a sea of html/css. So the following process was followed to create each Animation

1. Build all the static styles. The stationary pages which should come together in the end.
	* Should look good in mobile or desktop screen size.
2. Write down what you want this static page to do
	* This allows to decide if you need a transformation(for actions) or animations
	* Do you need to add multiple animations to the same element so new page reload or can you attach this to an enclosing element.
3. Write animation for each page.
4. Link pages.

## BlackWhite

##Unresolved issues

1. How to use to add animation with js and get it to work at a different time. So one animation then another
	* Can you just add a enclosing element and just add new animation to this.
2. Transitions need to be specified before they can be changed. So need to put left somewhere
3.Transition don't work with animations
4. You can only animate block level elements
5. Animation is applied to element applied. It is not cascaded. 
	* So if you change opacity of div then it must be the exact div not a parent
	6. Sell this as wix/wordpress plugin

##Resources

[Palette] http://paletton.com/