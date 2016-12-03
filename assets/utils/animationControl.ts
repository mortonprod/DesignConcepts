/**
 * @function
 * Will take an object specified by id.
 * When the animation is finished start other animations for other objects or run the same object again
 * @param animations
 */
export default function animationControl() {
    function changeAtEnd(animations: IAnimations) {
        var obj = document.getElementById(animations.name);
        obj.addEventListener("animationend", function () {
            console.log("Animation end: " + animations.name);
            let animationForIteration = animations.end[animations.calls]
            if (animationForIteration !== null && typeof animationForIteration !== "undefined") {
                for (let i = 0; i < animationForIteration.length; i++) {
                    let element = document.getElementById(animationForIteration[i].id);
                    element.className += " " + animationForIteration[i].class;
                }
            }
            animations.calls++;
        }, false);
    }
    /**
     * Add click event handler to className which adds css to html tag passed as argument 
     * @param className The class you want to attach to click
     * @param tag The html tag you want to add the new css class to
     * @param cssClass The css class to add to the tag on click
     */
    function changeOnClick(className = "leave", tag = "body", cssClass = "fadeOut") {
        var container = document.getElementsByClassName(className);
        var htmlObj = document.getElementsByTagName(tag);
        for (let i = 0; i < container.length; i++) {
            console.log("leave:" + container.item(i));
            container.item(i).onclick = function () {
                for (let j = 0; j < htmlObj.length; j++) {
                    htmlObj.item(j).className += cssClass
                }
            }
        }
    }
    return {
        changeAtEnd,
        changeOnClick
    }
}