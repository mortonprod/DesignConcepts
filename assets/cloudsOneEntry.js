require.ensure(["./designs/clouds/clouds.scss"], function () {
    require("./designs/clouds/clouds.scss");
}, "clouds-head");

require.ensure(["./designs/clouds/clouds.ts"], function () {
    require("./designs/clouds/clouds.ts");
}, "clouds-bodyBottom");