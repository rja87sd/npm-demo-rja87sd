"use strict";


const { removeDuplicates, mergeArrays } = require("../../Node-Assignment-4");
const goodbye = require("./lib/bye");
const greet = require("./lib/greet"); //does not require file extension

console.log(greet("User"));
console.log(goodbye("User"));

const arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];
const mergedArray = mergeArrays(array1, array2, array3);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

module.exports = { greet, goodbye };