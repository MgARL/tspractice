"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
const firstNumber = 2;
const secondNumber = 3;
let userName;
userName = "Miguel";
// display user welcome message                       
function showUser(user) {
    return `Welcome, ${user}!`;
}
console.log((0, utility_1.add)(firstNumber, secondNumber));
console.log(showUser(userName));
let birthYear = 1995;
let currentYear = 2022;
function calcAge(bY, cY) {
    return cY - bY;
}
console.log(calcAge(birthYear, currentYear));
// birthYear = '1995'
// console.log(calcAge(birthYear, currentYear))
// console.log(calcAge('1995', 2022))
function under21(bY, cY) {
    let age = cY - bY;
    return age < 21;
}
// console.log(under21(birthYear, currentYear))
// console.log(under21(2015, currentYear))
const isUnderAge = under21(2015, currentYear);
console.log(isUnderAge);
