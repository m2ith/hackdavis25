(function () {
    "use strict";
    console.log("reading JS");

    // TYPEIT ANIMATIONS

    // Section 1
    new TypeIt("#section1", {
        strings: "What is food insecurity?",
        speed: 50,
        waitUntilVisible: true,
    }).go();

    // Section 2
    new TypeIt("#section2", {
        strings: "Why does this happen . . . ?",
        speed: 50,
        waitUntilVisible: true,
    }).go();

    // Section 6
    new TypeIt("#section6", {
        strings: "Why does this matter?",
        speed: 50,
        waitUntilVisible: true,
    }).go();

    // Actions
    new TypeIt("#action", {
        strings: "Take Action!",
        speed: 50,
        waitUntilVisible: true,
    }).go();
})();