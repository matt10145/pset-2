const readlineSync = require("readline-sync");

console.log("\nEnter three homework grades.");
let homework1 = Number(readlineSync.question(""));
let homework2 = Number(readlineSync.question(""));
let homework3 = Number(readlineSync.question(""));

console.log("\nEnter three quiz grades.");
let quiz1 = Number(readlineSync.question(""));
let quiz2 = Number(readlineSync.question(""));
let quiz3 = Number(readlineSync.question(""));

console.log("\nEnter three test grades.");
let test1 = Number(readlineSync.question(""));
let test2 = Number(readlineSync.question(""));
let test3 = Number(readlineSync.question(""));

const hw_weight = 0.15;
const quiz_weight = 0.35;
const test_weight = 0.50;

let weightedHw = hw_weight*(1/3)*(homework1 + homework2 + homework3);
let weightedQuiz = quiz_weight*(1/3)*(quiz1 + quiz2 + quiz3);
let weightedTest = test_weight*(1/3)*(test1 + test2 + test3);
let grade = (weightedHw + weightedQuiz + weightedTest)/100;
let formattedGrade = grade.toLocaleString('en-US', {style: 'percent', minimumFractionDigits :2, maximumFractionDigits :2})

console.log("\nYour marking period grade is " + formattedGrade + ".");