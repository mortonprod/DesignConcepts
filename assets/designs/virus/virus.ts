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
    globalAlpha: number,
    numPixelPerFrame: number
    textHeight: number,
    fontSize: number
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
        globalAlpha: 1,
        numPixelPerFrame: 50,
        textHeight: 200,
        fontSize:10
    }
    seedBlackImage(canvas, config);
}

function seedBlackImage(canvas: HTMLCanvasElement, config: IConfig) {
    let ctx = canvas.getContext("2d");
    ctx.lineWidth = config.lineWidth;
    ctx.lineJoin = config.lineJoin;
    ctx.globalAlpha = config.globalAlpha;
    ctx.strokeStyle = config.strokeStyle;
    ctx.fillStyle = config.fillStyle
    fontResize(ctx,canvas.width, config.txt, config.fontSize);
    let pix = getPixelData(ctx, config.txt,canvas.width,canvas.height, config.textHeight);
    let states = createPixelMatrix(pix, canvas.width, canvas.height);
    runWeb(ctx, states,config.numPixelPerFrame);
    //run(ctx, obj.textStates, obj.count, config.numPixelPerFrame);
}
function getTextPixelNumber(states) {
    let textNum = 0;
    for (let x = 0; x < states.length; x++) {
        for (let y = 0; y < states[x].length; y++) {
            if (states[x][y].isText) {
                textNum++;
            }
        }
    }
    return textNum;
}

function runWeb(ctx, states: Array<Array<IStateVirus>>, numPixelPerFrame) {
    let textNum = getTextPixelNumber(states);
    let total = 0;
    let pi = 0;
    let record = []
    while (pi < numPixelPerFrame) {
        let x = randomIntFromInterval(0, states.length - 1);
        let y = randomIntFromInterval(0, states[x].length - 1);
        if (states[x][y].isText && !states[x][y].isInfected) {
            createImage(ctx, states[x][y].x, states[x][y].y, 1, 1, 255, 0, 255, 255);
            states[x][y].isInfected = true;
            record.push({x:x,y:y});
            pi++
            total++;
        }
    }
    frame();
    function frame() {
        pi = 0;
        for (let rec of record) {
            //leftRightUpDown
            let rand =  randomIntFromInterval(0, 3);
            let x = 0, y = 0; 
            if (rand === 0) {
                x = rec.x + 1
            } else if (rand === 1) {
                x = rec.x - 1
            } else if (rand === 2) {
                y = rec.y + 1
            } else if (rand === 3) {
                y = rec.y - 1
            } else {
                console.log("Wrong");
            }
            if (rand < 2) {
                if (typeof states[x][rec.y] === "undefined") {
                    continue;
                }
                if (states[x][rec.y].isText && !states[x][rec.y].isInfected) {
                    createImage(ctx, x, rec.y, 1, 1, 255, 0, 255, 255);
                    states[x][rec.y].isInfected = true;
                    record.push({ x: x, y: rec.y });
                    total++;
                    pi++;
                }
            } else {
                if (typeof states[rec.x][y] === "undefined") {
                    continue;
                }
                if (states[rec.x][y].isText && !states[rec.x][y].isInfected) {
                    createImage(ctx, rec.x, y, 1, 1, 255, 0, 255, 255);
                    states[rec.x][y].isInfected = true;
                    record.push({ x: rec.x, y: y });
                    total++
                    pi++;
                }
            }
            if (pi === numPixelPerFrame) {
                break;
            }
        }
        if (total < textNum) {
            console.log("total " + total + "  " + textNum);
            requestAnimationFrame(frame);
        } else {
            console.log("frame end");
        }
    }
}


function run(ctx,textStates, count,numPixelPerFrame) {
    let total = 0;
    frame();
    function frame() {
        console.log("Frame");
        let pi = 0;
        while (pi < numPixelPerFrame) {
            let x = randomIntFromInterval(0, textStates.length - 1);
            let y = randomIntFromInterval(0, textStates[x].length - 1);
            if (textStates[x][y].isText && !textStates[x][y].isInfected) {
                createImage(ctx,textStates[x][y].x, textStates[x][y].y, 1, 1, 255, 0, 255, 255);
                textStates[x][y].isInfected = true;
                total++;
                pi++
            }
        }
        if (total < count - 100) { ///Hack need to fix this.
            requestAnimationFrame(frame);
            console.log("total " + total + "  " + count);
        } else {
            console.log("frame end");
        }
    }
}
function createImage(ctx,x: number, y: number, w: number, h: number, r: number, g: number, b: number, a: number) {
    var id = ctx.createImageData(w, h);
    var d = id.data;
    d[0] = r;
    d[1] = g;
    d[2] = b;
    d[3] = a;
    ctx.putImageData(id, x, y);
}


function fontResize(ctx,width,txt,fontSize) {
    let textWidth = ctx.measureText(txt).width;
    let letNum = 2;
    while (width - 20 > textWidth) {
        fontSize = fontSize + 1;
        ctx.font = fontSize + ctx.font.slice(letNum)
        textWidth = ctx.measureText(txt).width;
        if (fontSize === 100) {
            letNum = 3;
        }
    }
}
function getPixelData(ctx,txt,width,height,textHeight) {
    let x = 0;
    for (let i = 0; i < txt.length; i++) {
        console.log("Text: " + txt[i])
        ctx.fillText(txt[i], x, textHeight);
        x += ctx.measureText(txt[i]).width + ctx.lineWidth;
    }
    //get pixel information after drawing.
    let imgData = ctx.getImageData(0, 0, width, height);
    return imgData.data;
}

function getPixel(index: number,pix) {
    var i = index * 4;
    return [pix[i], pix[i + 1], pix[i + 2], pix[i + 3]] // returns array [R,G,B,A]
}
function getPixelXY(x: number, y: number,pix,width) {
    return getPixel(y * width + x,pix);
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createPixelMatrix(pix,width,height) {
    let count = 0;
    let states: Array<Array<IStateVirus>> = []
    for (let x = 0; x < width; x++) {
        let colText = [];
        for (let y = 0; y < height; y++) {
            let pixInfo = getPixelXY(x, y,pix,width);
            let state: IStateVirus = {
                x,
                y,
                isInfected: false,
                isText: false,
                rgba: pixInfo
            }
            colText.push(state);
            if (pixInfo[0] > 0 && pixInfo[1] > 0 && pixInfo[2] > 0 && pixInfo[3] > 0) {
                console.log("Found " + pixInfo + "  (x,y)=  " + x + " " + y);
                state.isText = true;
                count++;
            }
        }
        if (colText.length !== 0) {
            states.push(colText);
        }
    }
    return states;
}
