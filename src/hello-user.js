const readlineSync = require("readline-sync");

const firstName = readlineSync.question("\nHi! What's your name?\n");
console.log(" ");
console.log("Hello, " + firstName + "!");