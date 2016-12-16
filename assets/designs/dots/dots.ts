/// <reference path="../../../typings/index.d.ts" />
import { System } from "./system";
import { Dot } from "./state";
window.onload = () => { 
    let canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    let state =  {
        radius: 10,
        pos: { x: 100, y: 100, z: 0 },
        vel: { x: 1, y: 0, z: 0 },
        charge: 1,
        mass: 1,
    }
    let dotConfig =  {
        start: 0,
        end: 2* Math.PI,
        radius: 5,
        colour: "red"
    }
    let dot = new Dot(ctx, dotConfig, state);
    let dots = [dot]
    let mag: IVector3d = { x: 0, y: 0, z: 1 };
    let system = new System(dots,mag,0.001);
    console.log("Create dots");
    requestAnimationFrame(draw); ///This will 
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        system.draw();///Change states
        ctx.closePath();
        requestAnimationFrame(draw); ///This will 
    }

}
