const readlineSync = require("readline-sync");

console.log(" ");
let width = readlineSync.question("Width: ");
let length = readlineSync.question("Length: ");

const conversionFactor = 2.54;
let perimeter = conversionFactor*(2*width + 2*length);

formattedPerimeter = perimeter.toLocaleString('en-US', {minimumFractionDigits :2, maximumFractionDigits: 2});
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + formattedPerimeter + " centimeter(s).");
