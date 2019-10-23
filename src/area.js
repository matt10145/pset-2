const readlineSync = require("readline-sync");

console.log(" ");
let width = readlineSync.question("Width: ");
let length = readlineSync.question("Length: ");

//Convert to millimeters
const conversionFactor = 25.4;
let area = width*length*(Math.pow(conversionFactor, 2));

formattedArea = area.toLocaleString(undefined, {minimumFractionDigits :2, maximumFractionDigits: 2})
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + formattedArea + " square millimeter(s).");
