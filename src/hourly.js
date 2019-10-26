const readlineSync = require("readline-sync");

const hourlyWage = readlineSync.question("\nHourly wage: ");

let monHours = Number(readlineSync.question("\nMonday: "));
let tuesHours = Number(readlineSync.question("Tuesday: "));
let wedHours = Number(readlineSync.question("Wednesday: "));
let thursHours = Number(readlineSync.question("Thursday: "));
let friHours = Number(readlineSync.question("Friday: "));
let satHours = Number(readlineSync.question("Saturday: "));
let sunHours = Number(readlineSync.question("Sunday: "));

let earnings = hourlyWage*(monHours + tuesHours + wedHours + thursHours + friHours + satHours + sunHours);
console.log("\nYou'll make " + new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(earnings) + " this week.");