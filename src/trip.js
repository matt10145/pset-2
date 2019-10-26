const readlineSync = require("readline-sync");

const numStudents = Number(readlineSync.question("\nStudents: "));
const numTeachers = Number(readlineSync.question("Teachers: "));
const capacity = Number(readlineSync.question("Bus capacity: "));

let passengers = numStudents + numTeachers;
let numBuses = Math.ceil(passengers/capacity);
let remainder = passengers % capacity;

console.log("");
console.log(numBuses + " bus(es) is (are) needed, with " + remainder + " passenger(s) on the last bus.");