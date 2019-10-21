const readlineSync = require("readline-sync");

let width = readlineSync.question("Width: ");
let length = readlineSync.question("Length: ");

//Convert to millimeters
convertedWidth = width*25.4;
convertedLength = length*25.4;
let area = convertedWidth*convertedLength;
formattedArea = area.toFixed(2)

console.log("A(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + formattedArea + " square millimeter(s).");

//fix comma
