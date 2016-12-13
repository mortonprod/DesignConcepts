import * as $ from "jquery";

class Dot {
    pos: { x: number; y: number; z: number }
    vel: { x: number; y: number; z: number }
    mag: { x: number; y: number; z: number }
    arc: { start: number; end: number, radius: number }
    colour: string = "green";
    speed: number = 10;
    qOverM: number = 1;
    time: number = 1;
    ctx: CanvasRenderingContext2D;
    constructor(ctx: CanvasRenderingContext2D, mag: { x: number; y: number; z: number }, speed: number, qOverM: number, time: number) {
        this.ctx = ctx;
        this.mag = mag;
        this.speed = speed;
        this.qOverM = qOverM;
        this.time = time;
    }
    setPosition(pos: { x: number; y: number; z: number }) {
        this.pos = pos;
    }
    setVelocity(vel: { x: number; y: number; z: number }) {
        let mag = Math.sqrt(Math.pow(vel.x, 2) + Math.pow(vel.y, 2) + Math.pow(vel.z, 2))
        vel.x = vel.x / mag;
        vel.y = vel.y / mag;
        vel.z = vel.z / mag;
        this.vel = vel;
    }
    setArc(arc: { start: number; end: number, radius: number }) {
        this.arc = arc;
    }
    setColour(c: string) {
        this.colour = c;
    }
    move() {
        let vX = this.vel.x * this.speed;
        let vY = this.vel.y * this.speed;
        let vZ = this.vel.z * this.speed;
        let accX = (vY * this.mag.z - vZ * this.mag.y) * this.qOverM;
        let accY = -(vX * this.mag.z - vZ * this.mag.x) * this.qOverM;
        let accZ = (vX * this.mag.y - vY * this.mag.x) * this.qOverM;
        ///Calculate new position
        let newPosX = this.pos.x + vX * this.time + 0.5 * accX * Math.pow(this.time, 2);
        let newPosY = this.pos.y + vY * this.time + 0.5 * accY * Math.pow(this.time, 2);
        let newPosZ = this.pos.z + vZ * this.time + 0.5 * accZ * Math.pow(this.time, 2);
        //Calculate new velocity direction
        let deltaX = newPosX - this.pos.x;
        let deltaY = newPosY - this.pos.y;
        let deltaZ = newPosZ - this.pos.z;
        let mag = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2) + Math.pow(deltaZ, 2))
        //Set new velocity
        this.vel.x = deltaX / mag;
        this.vel.y = deltaY / mag;
        this.vel.z = deltaZ / mag;
        //Set new position; s=ut+0.5*a*t^2;
        this.pos.x = newPosX;
        this.pos.y = newPosY;
        this.pos.z = newPosZ;
    }
    drawFull() {
        this.ctx.arc(this.pos.x, this.pos.y, this.arc.radius, this.arc.start, this.arc.end);
        this.ctx.fillStyle = this.colour;
        this.ctx.fill();
    }
}


$(document).ready(function () {
    let canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    let dot = new Dot(ctx, { x: 0, y: 0, z: 1 }, 10, 1, 0.1);
    dot.setPosition({ x: 100, y: 100, z: 0 });
    dot.setArc({ start: 0, end: 2 * Math.PI, radius: 5 });
    dot.setColour("green");
    dot.setVelocity({ x: 1, y: 0, z: 0 });
    console.log("Create dots");
    requestAnimationFrame(draw); ///This will 
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        dot.drawFull();
        dot.move();
        ctx.closePath();
        requestAnimationFrame(draw); ///This will 
    }
})


