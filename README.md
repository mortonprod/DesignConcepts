# Design Concepts

#What do people want to see.
Taking away content. People want to see understandable interfaces,(what the buttons mean),
but they also want complex styles.  When you think about it complexity is king. 
But how do you convey complexity to the user. You can add this in many ways

1. Static css 
2. Transformations through actions
3. Animations with respect to time for each element
4. Pictures
5. Videos
6. Manipulation of the underlying pixels

The first three interact with a DOM overhead and the last interact with 
the underlying pixels. Note interaction is only permitted with the last entry;
Video and pictures are static in nature. You can either calculate the drawing 
on the browser or on the server. Either way you must have all pixels for each
frame to render it to the user.



 

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

A simple physics system with dots in box with magnetic field. The dots should represent a topic. 

###Physics Parameters
1. Magnetic field.
2. For each particle
	* Charge
	* Mass.
	* Initial velocity.
	* Volume

###Algorithm

Note the division of concerns. The objects store parameters and the parameters draw in someway for each object.
The simulation checks for conditions on the objects and then updates there parameter(state) as need be. 

Each object is a class which contains
1. All it's physical attributes as parameters. Basically the information needed to do the simulation. No drawing information.
	* Config
2. Now map these parameters to drawing something on the screen for this object. 
	* Draw()

The simulation only ever changes the physical parameters which in turn changes the drawing.
Coordinates X/Y/Z change with particle motion with magnetic field and interactions. Change in Z denotes as change in dot size.
Calculation before rendering 
1. Draw state
2. Move to next state given forces.
3. Check if two dots are touching. If touching then update momentum state
4. Check if touching container. If touching update momentum state.  

###Code

1. Physics state objects
	* Contain parameters of each object to describe simulation
2. Draw functions 
	* Takes state draws something. 
3. Simulation function
	* Takes all particle states and checks for conditions.
	* If condition met then update state in config.	

###Physics
The state can be changed with different processes. Each one you update the state which updates the drawing.
####Magnetic fields
```
F=qVxB
```
####Collisions

The momentum along the line connecting the two dots centres is the only momentum which can be transfered.
You can also think of the balls spinning with angular momentum at the surface.

Work in COM frame with momentum cancelling along the x-axis. In this frame the momentum of the two particles must be equal.
m_{total}^{1}v_{total}^{1} = -m_{total}^{2}v_{total}^{2} (Rearrange for v1)

Using kinetic energy relation with v1 deduce v2 and then v1. v1 and v2 are the velocities in the COM frame.
You need to work out how to get to COM frame and then reverse it on v1 and v2 to get the velocities in your frame. 


Work out total momentum and therefore COM velocity.
Transforms
1. Rotate so velocity is in x direction.

###Virus

Take canvas made up of black text and white background. Get black pixels. 
Start with blank page and then seed some pixels and let them expand to cover the 
full word. 


 
###Aditional

Use wireless IpV4 to get server on computer to phone 

Perfect example of type usefulness is IVector3d so you can do manipulations with only objects of this type.
If you pass the wrong type then you get told right away.

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
12.Passing config is this a good idea?
##Resources

[Palette] http://paletton.com/
[Canvas] https://www.sitepoint.com/canvas-vs-svg-choosing-the-right-tool-for-the-job/
[scroll] https://css-tricks.com/snippets/jquery/smooth-scrolling/
[Basic Physics] https://en.wikipedia.org/wiki/Elastic_collision