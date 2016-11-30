var container = document.getElementsByClassName("leave");
var body = document.getElementsByTagName("body");
container.onclick = function(){
    console.log("Fade out");
    body.className += "fadeOut"
}
