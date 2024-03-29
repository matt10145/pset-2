const readlineSync = require("readline-sync");

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");

const CM_PER_INCH = 2.54;
let perimeter = CM_PER_INCH*(2*width + 2*length);
formattedPerimeter = perimeter.toLocaleString('en-US', {minimumFractionDigits :2, maximumFractionDigits: 2});

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + formattedPerimeter + " centimeter(s).");