const readlineSync = require("readline-sync");

const retirementRate = 0.07;
const fedRate = 0.157;
const stateRate = 0.0447;
const socialSecRate = 0.062;
const medicareRate = 0.0145;

let annualSalary = readlineSync.question("\nAnnual salary: ");


let reducedAnnual = annualSalary*(1-retirementRate); //contribute to 401k, first
let takeHomePay = reducedAnnual*(1/24)*(1-(fedRate + stateRate + socialSecRate + medicareRate));

console.log("\nYour take-home pay each check will be " + new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(takeHomePay) + ".");
