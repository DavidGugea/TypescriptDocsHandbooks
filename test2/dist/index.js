"use strict";
let obj = { x: 0 };
function greet(name) {
    console.log(`Hello ${name}`);
}
function printCoord(pt) {
    console.log(`The coordinate's x value is ${pt.x}`);
    console.log(`The coordinate's y value is ${pt.y}`);
}
printCoord({ x: 100, y: 100 });
