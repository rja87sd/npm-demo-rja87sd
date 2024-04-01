"use strict";


const goodbye = require("./lib/bye");
const greet = require("./lib/greet"); //does not require file extension

console.log(greet("User"));
console.log(goodbye("User"));

module.exports = { greet, goodbye };