let width = 48;
let length = 24;
let diameter = 6;

let surfaceArea = (width*length)-(Math.PI*Math.pow(diameter*(1/2), 2));
let formattedSurface = surfaceArea.toLocaleString('en-US', {minimumFractionDigits :2, maximumFractionDigits: 2});

console.log("\nThe surface area of a standard Cornhole board is " + formattedSurface + " square inch(es).")
