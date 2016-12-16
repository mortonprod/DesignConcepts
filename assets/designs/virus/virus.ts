window.onload = () => {
    let canvas = document.querySelector("canvas");
    seedBlackImage(canvas);
}

function seedBlackImage(canvas: HTMLCanvasElement) {
    interface IStateVirus {
        isInfected: Boolean,
        isText: Boolean,
        rgba: any
    }
    let px = 0;
    let py = 0;
    var ctx = canvas.getContext("2d");
    let states: Array<Array<IStateVirus>> = []
    let txt = "Virus ";
    let fontSize = 20;
    ctx.fillStyle = "black"
    ctx.lineWidth = 2; ctx.lineJoin = "round"; ctx.globalAlpha = 1;
    ctx.strokeStyle = "#1f2f90";
    ctx.fillStyle = "white"
    ctx.font = fontSize + "px Comic Sans MS, cursive, TSCu_Comic, sans-serif";
//    let textWidth = ctx.measureText(txt).width;
//    while (canvas.width - 20 > textWidth) {
//        console.log("increase " + fontSize + "  " + textWidth + "  " + canvas.width);
//        fontSize = fontSize + 1;
//        ctx.font = fontSize + ctx.font.slice(2)
//        textWidth = ctx.measureText(txt).width;
//    }
    let x = 0;
    for (let i = 0; i < txt.length; i++) {
        console.log("Text: " + txt[i])
        ctx.fillText(txt[i], x, 30);
        x += ctx.measureText(txt[i]).width + ctx.lineWidth;
    }
    //get pixel information after drawing.
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let pix = imgData.data;
    createPixelMatrix();
    run();
    function fillPixel(x: number, y: number, red: number, green: number, blue: number, alpha: number) {
        let style = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
        ctx.fillStyle = style;
        ctx.fillRect(x, y, 1, 1);
    }
    function invertColour() {
        for (var i = 0, n = pix.length; i < n; i += 4) {
            pix[i] = 255 - pix[i]; // red
            pix[i + 1] = 255 - pix[i + 1]; // green
            pix[i + 2] = 255 - pix[i + 2]; // blue
            // i+3 is alpha (the fourth element)
        }
    }
    function createPixelMatrix() {
        for (let x = 0; x < canvas.width; x++) {
            let col = [];
            for (let y = 0; y < canvas.height; y++) {
                let pixInfo = getPixelXY(x, y);
                //Put logic
                let state: IStateVirus = {
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
    }
    function expand() {
        for (let x = 0; x < states.length; x++) {
            for (let y = 0; y < states[x].length; y++) {
                if (states[x][y].isText) {
                    //states[x][y].rgba[0] = 255;
                    createImage(x, y,1,1, 255, 0, 255, 255);
                }
            }
        }
    }
    function run() {
        if (states[px][py].isText) {
            console.log("txt pixel")
            createImage(px, py, 1, 1, 255, 0, 255, 255);
        }
        if (py === states[px].length - 1) {
            px++;
            py = 0;
        } else {
            py++;
        }
        if (px < states.length && py < states[px].length) {
            requestAnimationFrame(run);
        }
    }
    function createImage(x:number,y:number,w:number,h:number,r:number,g:number,b:number,a:number) {
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
        return getPixel(y * imgData.width + x);
    }
}