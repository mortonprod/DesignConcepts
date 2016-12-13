require.ensure(["./designs/dots/dots.scss"], function () {
    require("./designs/dots/dots.scss");
}, "dots-head");

require.ensure(["./designs/dots/dots.ts"], function () {
    require("./designs/dots/dots.ts");
}, "dots-bodyBottom");