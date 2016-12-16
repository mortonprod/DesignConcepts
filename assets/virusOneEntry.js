require.ensure(["./designs/virus/virus.scss"], function () {
    require("./designs/virus/virus.scss");
}, "virus-head");

require.ensure(["./designs/virus/virus.ts"], function () {
    require("./designs/virus/virus.ts");
}, "virus-bodyBottom");