var container = document.getElementsByClassName("leave");
var body = document.getElementsByTagName("body");
for (let i = 0; i < container.length; i++){
    console.log("leave:" + container.item(i));
    container.item(i).onclick = function () {
        console.log("Fade out" + body);
        body.item(0).className += " fadeOut"
    }

}
var one = document.getElementById("one");
//Only run when the event runs for the first time.
one.addEventListener("animationstart", function () {
    console.log("Start animation!")

}, false/*If true only run once*/);
///Run each time an animation is run
one.addEventListener("animationiteration", function () {
    console.log("Iteration animation!")

}, false/*If true only run once*/);
//Once the animation ends
one.addEventListener("animationend", function () {
    console.log("End animation!")
    body.item(0).className += " fadeOut"
}, false/*If true only run once*/);