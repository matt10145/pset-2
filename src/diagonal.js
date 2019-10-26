const readlineSync = require("readline-sync");

let width = readlineSync.question("\nWidth: ");
let length = readlineSync.question("Length: ");
let diagonal = Math.hypot(width, length);

formattedDiagonal = diagonal.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + formattedDiagonal + " inch(es).");
