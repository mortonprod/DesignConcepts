import * as $ from "jquery";
$(document).ready(function () {
    let canvas = document.querySelector("canvas");
    var ctx = document.querySelector("canvas").getContext("2d"),
        dashLen = 220, dashOffset = dashLen, speed = 10,
        txt = "Clouds ", x = 1, i = 0;
    let fontSize = 20;
    ctx.font = fontSize + "px Comic Sans MS, cursive, TSCu_Comic, sans-serif";
    ctx.lineWidth = 2; ctx.lineJoin = "round"; ctx.globalAlpha = 1;
    ctx.strokeStyle = "#1f2f90";
    ctx.fillStyle = "white"

    let textWidth = ctx.measureText(txt).width;
    while (canvas.width - 20 > textWidth) {
        fontSize = fontSize + 1;
        ctx.font = fontSize + ctx.font.slice(2)
        textWidth = ctx.measureText(txt).width;
    }
    (function draw() {
        console.log("Print: " + canvas.width + " " + window.innerWidth);
        ctx.clearRect(x, 0, 60, 150);//Always clear any other pixel changes before drawing again.
        ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
        console.log("setlineDash: " + txt[i] + "  " + (dashLen - dashOffset) + "   " + (dashOffset - speed))
        dashOffset -= speed;                                         // reduce dash length
        ctx.strokeText(txt[i], x, 90);                               // stroke letter

        if (dashOffset > 0) requestAnimationFrame(draw);             // animate
        else {
            ctx.fillText(txt[i], x, 90);                               // fill final letter
            dashOffset = dashLen;                                      // prep next char
            x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
            ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
            ctx.rotate(Math.random() * 0.005);                         // random rotation
            if (i < txt.length) {
                requestAnimationFrame(draw);
            } else {
                let sun = document.getElementById("sun")
                //sun.className += " sunMoves";
                //todo:Must match css time and distance.
                let me = $("#sky").offset().top;
                $('html, body').delay(3000).animate({   
                    scrollTop: $("#sky").offset().top + $("#sky").height()/3
                }, 5000);
                $('#sun').animate({
                    opacity: 1
                }, 3000).animate({
                    //transform: 'translateY(' + ($("#sky").offset().top - $("#sun").offset().top) + ')'
                    //transform:"translateY(100)"
                    top: $("#sky").offset().top + $("#sky").height()/3
                }, 3000);
                // document.getElementById('sun').scrollIntoView(true);
                //window.scrollBy(0,100);
                //setInterval(function () {
                //    $('html, body').animate({
                //        scrollTop: $("#sun").offset().top
                //    }, 0.8);
                //}, 2);
                //sun.scrollIntoView({ block: "end", behavior: "smooth" });
            }
        }
    })();

    (function drawDots() {
        let canvasDot = document.querySelector("dot");
        let can = <HTMLCanvasElement> document.getElementById("dot");
        let ctxDot = can.getContext("2d");//Must cast to canvas
        ctxDot.strokeStyle = ctxDot.fillStyle = "green";
        ctxDot.clearRect(x, 0, 60, 150);//Always clear any other pixel changes before drawing again.
        ctxDot.setLineDash([5, 15]); //5 solid 15 blank
        ctxDot.beginPath();
        ctxDot.moveTo(0, 100);
        ctxDot.lineTo(400, 100);
        ctxDot.stroke();
    })();
})

//window.addEventListener('resize', draw, false);
//draw();