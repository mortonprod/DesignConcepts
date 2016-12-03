import animationControl from "../../utils/animationControl";
console.log("Fast Design");
let one: IAnimations = {
    name: "one",
    end: [[
        { id: "one", class: "jumpNW" }
    ]],
    calls: 0
}
let two: IAnimations = {
    name: "two",
    end: [[
        { id: "one", class: "jumpNE" }
    ]],
    calls: 0
}
let three: IAnimations = {
    name: "three",
    end: [[
        { id: "three", class: "jumpSW" }
    ]],
    calls: 0
}

let four: IAnimations = {
    name: "four",
    end: [[
        { id: "four", class: "jumpSE" }
    ]],
    calls: 0
}
let five: IAnimations = {
    name: "five",
    end: [[
        { id: "five", class: "jumpSW" }
    ]],
    calls: 0
}
let six: IAnimations = {
    name: "six",
    end: [[
        { id: "six", class: "jumpNE" }
    ]],
    calls: 0
}

animationControl().changeAtEnd(one);
animationControl().changeAtEnd(two);
animationControl().changeAtEnd(three);
animationControl().changeAtEnd(four);
animationControl().changeAtEnd(five);
animationControl().changeAtEnd(six);

animationControl().changeOnClick("leave", "body", "fadeOut");