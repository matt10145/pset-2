const readlineSync = require("readline-sync");

let annualSalary = readlineSync.question("\nAnnual salary: ");

const retireRate = 0.07;
const fedRate = 0.157;
const stateRate = 0.0447;
const socialSecRate = 0.062;
const medicareRate = 0.0145;

let reducedAnnual = annualSalary*(1-retireRate); //contribute to 401k, first
let takeHomePay = reducedAnnual*(1/24)*(1-(fedRate + stateRate + socialSecRate + medicareRate));

console.log("\nYour take-home pay each check will be " + new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(takeHomePay) + ".");