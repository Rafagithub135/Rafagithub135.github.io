"use strict";
// (function () {

let h1Elements = document.getElementsByTagName("h1");

setInterval(function () {
    for (let i = 0; i < h1Elements.length; i++) {
        if (h1Elements[i].style.fontSize !== "40px") {
            h1Elements[i].style.fontSize = "40px";
        } else {
            h1Elements[i].style.fontSize = "20px";
        }
    }
}, 1000);
// })