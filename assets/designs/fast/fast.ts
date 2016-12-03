import animationControl from "../../utils/animationControl";
let oneAnimation: IAnimations = {
    name: "one",
    end: [[{ id: "body", class:"fadeOut"}]],
    calls:0
}

animationControl().changeAtEnd(oneAnimation);
animationControl().changeOnClick("leave","body","fadeOut");