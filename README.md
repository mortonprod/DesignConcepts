# Design Concepts

Design concepts which can be used for many different projects.
The concepts are html and css (sass) with vanilla javascript (typescript) on the frontend and node as the backend.

This uses canvases for complex pixel by pixel animation. Does not create a dom but interacts with 
pixels individually.  

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

##Clouds

"How I which software was made"

Falling from sky. 

Can easily use resource from internet can add to it 
with same colour using google extension.

Idea is to follow dropped object.

##Dots

Inject dots from some side. The dots should act as if in a magnetic field and rotate round origin of canvas.
```
F=qVxB
```
V is the ball direction and B is out of the page.


This uses canvas which will draw background dots filling up all the background 
 
###Aditional

Use wireless IpV4 to get server on computer to phone 


##Unresolved issues

1. How to use to add animation with js and get it to work at a different time. So one animation then another
	* Can you just add a enclosing element and just add new animation to this.
2. Transitions need to be specified before they can be changed. So need to put left somewhere
3.Transition don't work with animations
4. You can only animate block level elements
5. Animation is applied to element applied. It is not cascaded. 
	* So if you change opacity of div then it must be the exact div not a parent
	6. Sell this as wix/wordpress plugin
6. overflow:hidden work for clouds but not when resized
7. Can't scroll easily with pure js. Need to use jquery. But no event for motion so need to poll with settimeInterval
8> can't use next tick to check in browser?
9. If you don't know the height of div since you want width=fullScreen and this depends ons device then you don't have pixels or percentage.
Do you need js for this or use css somehow?
10. Cna't use transform:"translateY(100) with jquery
11.Set parameter of function using name? Not working
##Resources

[Palette] http://paletton.com/
[Canvas] https://www.sitepoint.com/canvas-vs-svg-choosing-the-right-tool-for-the-job/
[scroll] https://css-tricks.com/snippets/jquery/smooth-scrolling/
