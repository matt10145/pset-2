const readlineSync = require("readline-sync");

let numStudents = Number(readlineSync.question("\nStudents: "));
let numTeachers = Number(readlineSync.question("Teachers: "));
let capacity = Number(readlineSync.question("Bus capacity: "));

let passengers = numStudents + numTeachers;
let numBuses = Math.ceil(passengers/capacity);
let remainder = passengers % capacity;

console.log("");
console.log(numBuses + " bus(es) is (are) needed, with " + remainder + " passenger(s) on the last bus.");
