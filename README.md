# Design Concepts

Design concepts which can be used for many different projects.
The concepts are html and css, with a vanilla javascript on the frontend and node as the backend.

Animation is time based and can only be placed on a single element. 
Wrap elements with another div if you need to add an animtion after the first. 

Transformation are action based. So if you hover over an element then change some characteristics. 
The characteristics must exist for them to be changed.

##Structure of each page

* Html built with jade.
* Initial css and animations run on startup.
* JS changes styles on each elements animation end or events from user.

##Folder structure

* Assets: Contains entry chunks and common parameters
* Designs: A folder for each design 
* Design(Example fast): Contains all information to run animations added to jade template. 

The large number of animations is split into parts; when one ends another begins.
This allows us to create sensible animation segments which can be reused.  


##Concepts

Each concept is a theme which should have consistent 

* Colour: Chose a palette and be consistent. 
* Interactions: The effect for a particular interaction should be predictable. 

The theme is the adjactive not what it is.
For example, you can make a welcome page or blog from the fast theme. 

###Fast. 

* Colour: Vibrant triad with red as primary.
* Interactions: 

Start sequence consists of 
* Letters appear slowly: "Welcome to the fast design concept" 
* Fade away letters
* Fade in: 1,2,3 
* Show motion through color change 
* Through some words(parts from websites) flying through air
* Fade to white; then show letters flashing: Now try some components?;
* Click on component to show some example components with this style.

##Unresolved issues

1. How to use to add animation with js and get it to work at a different time. So one animation then another
	* Can you just add a enclosing element and just add new animation to this.
2. Transitions need to be specified before they can be changed. So need to put left somewhere
3.Transition don't work with animations
4. You can only animate block level elements
5. Animation is applied to element applied. It is not cascaded. 
	* So if you change opacity of div then it must be the exact div not a parent

##Resources

[Palette] http://paletton.com/