const reader = require('readline-sync');
const utils = require("./converter.js");

const a = reader.questionInt("what number would you like to convert to binary = ");
const b = reader.questionInt("what number would you like to convert to hexadecimal = ");

console.log(utils.convertToBinary(a));
console.log(utils.convertToHexa(b));
