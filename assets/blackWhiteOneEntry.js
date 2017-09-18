require.ensure(["./designs/blackWhite/blackWhite.scss"], function () {
    require("./designs/blackWhite/blackWhite.scss");
}, "blackWhite-head");

require.ensure(["./designs/blackWhite/blackWhite.ts"], function () {
    require("./designs/blackWhite/blackWhite.ts");
}, "blackWhite-bodyBottom");