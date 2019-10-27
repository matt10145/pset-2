const readlineSync = require("readline-sync");

let annualSalary = readlineSync.question("\nAnnual salary: ");

const PRETAX_PORTION = 0.07;
const FED_RATE = 0.157;
const STATE_RATE = 0.0447;
const SOCIALSEC_RATE = 0.062;
const MEDICARE_RATE = 0.0145;

let reducedAnnual = annualSalary*(1-PRETAX_PORTION); //contribute to 401k first, then take remaining tax
let takeHomePay = reducedAnnual*(1/24)*(1-(FED_RATE + STATE_RATE + SOCIALSEC_RATE + MEDICARE_RATE));

console.log("\nYour take-home pay each check will be " + new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(takeHomePay) + ".");