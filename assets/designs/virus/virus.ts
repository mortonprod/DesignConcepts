interface IStateVirus {
    x: number,
    y: number
    isInfected: Boolean,
    isText: Boolean,
    rgba: any
}
interface IConfig {
    txt: string,
    fontInfo: string,
    fillStyle: string,
    strokeStyle: string,
    lineWidth: number,
    lineJoin: string,
    globalAlpha: number

}
window.onload = () => {
    let canvas = document.querySelector("canvas");
    let config = {
        txt: "Virus",
        fontInfo: "Comic Sans MS, cursive, TSCu_Comic, sans-serif",
        fillStyle: "white",
        strokeStyle: "#1f2f90",
        lineWidth: 2,
        lineJoin: "round",
        globalAlpha: 1
    }
    seedBlackImage(canvas, config);
}

function seedBlackImage(canvas: HTMLCanvasElement, config: IConfig) {
    let numPixelPerFrame = 5;
    var ctx = canvas.getContext("2d");
    let fontSize = 20;
    ctx.lineWidth = config.lineWidth;
    ctx.lineJoin = config.lineJoin;
    ctx.globalAlpha = config.globalAlpha;
    ctx.strokeStyle = config.strokeStyle;
    ctx.fillStyle = config.fillStyle
    ctx.font = fontSize + "px " + config.fontInfo;
    let pix = getPixelData();
    let states = createPixelMatrix();
    run();
    function getPixelData() {
        let x = 0;
        for (let i = 0; i < config.txt.length; i++) {
            console.log("Text: " + config.txt[i])
            ctx.fillText(config.txt[i], x, 30);
            x += ctx.measureText(config.txt[i]).width + ctx.lineWidth;
        }
        //get pixel information after drawing.
        let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        return imgData.data;
    }
    function createPixelMatrix() {
        let states: Array<Array<IStateVirus>> = []
        for (let x = 0; x < canvas.width; x++) {
            let col = [];
            for (let y = 0; y < canvas.height; y++) {
                let pixInfo = getPixelXY(x, y);
                //Put logic
                let state: IStateVirus = {
                    x,
                    y,
                    isInfected: false,
                    isText: false,
                    rgba: pixInfo
                }
                if (pixInfo[0] > 0 && pixInfo[1] > 0 && pixInfo[2] > 0 && pixInfo[3] > 0) {
                    console.log("Found " + pixInfo + "  (x,y)=  " + x + " " + y);
                    state.isText = true;
                }
                col.push(state);
            }
            states.push(col);
        }
        return states;
    }
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    function run() {
        let total = 0;
        function frame() {
            let pi = 0;
            while (pi < numPixelPerFrame) {
                let x = randomIntFromInterval(0, states.length - 1); 
                let y = randomIntFromInterval(0, states[x].length - 1);
                if (states[x][y].isText && !states[x][y].isInfected) {
                    createImage(states[x][y].x, states[x][y].y, 1, 1, 255, 0, 255, 255);
                    states[x][y].isInfected = true;
                    total++;
                    pi++
                }
            }
            if (total < canvas.width * canvas.height) {
                requestAnimationFrame(frame);
            }
        }
        frame();
    }
    function createImage(x: number, y: number, w: number, h: number, r: number, g: number, b: number, a: number) {
        var id = ctx.createImageData(w, h);
        var d = id.data;
        d[0] = r;
        d[1] = g;
        d[2] = b;
        d[3] = a;
        ctx.putImageData(id, x, y);
    }
    function getPixel(index: number) {
        var i = index * 4;
        return [pix[i], pix[i + 1], pix[i + 2], pix[i + 3]] // returns array [R,G,B,A]
    }
    function getPixelXY(x: number, y: number) {
        return getPixel(y * canvas.width + x);
    }
}


//function invertColour() {
//    for (var i = 0, n = pix.length; i < n; i += 4) {
//        pix[i] = 255 - pix[i]; // red
//        pix[i + 1] = 255 - pix[i + 1]; // green
//        pix[i + 2] = 255 - pix[i + 2]; // blue
//        // i+3 is alpha (the fourth element)
//    }
//}
//function expand() {
//    for (let x = 0; x < states.length; x++) {
//        for (let y = 0; y < states[x].length; y++) {
//            if (states[x][y].isText) {
//                //states[x][y].rgba[0] = 255;
//                createImage(x, y, 1, 1, 255, 0, 255, 255);
//            }
//        }
//    }
//}
//function fillPixel(x: number, y: number, red: number, green: number, blue: number, alpha: number) {
//    let style = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
//    ctx.fillStyle = style;
//    ctx.fillRect(x, y, 1, 1);
//}
