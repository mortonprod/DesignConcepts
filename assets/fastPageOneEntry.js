/// Each page has a single entry
/// Split the page into stuff loaded in the head and after the body.
/// Load the common and design specific sass and typescript
require.ensure(["./designs/fast/fast.scss", "./common/sass/fade.scss"], function () {
    require("./designs/fast/fast.scss");
    require("./common/sass/fade.scss");
}, "head");

require.ensure(["./designs/fast/fast.ts"], function () {
    require("./designs/fast/fast.ts");
}, "bodyBottom");