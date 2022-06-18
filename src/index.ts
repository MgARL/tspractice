import { add } from "./utility"

const firstNumber = 2
const secondNumber = 3

let userName
userName = "Miguel"

// display user welcome message                       
function showUser(user: string):string {
    return `Welcome, ${user}!`
} 

console.log(add(firstNumber, secondNumber))
console.log(showUser(userName)) 

let birthYear: number = 1995
let currentYear: number = 2022

function calcAge(bY: number, cY: number): number{
    return cY - bY
}

console.log(calcAge(birthYear, currentYear))

// birthYear = '1995'
// console.log(calcAge(birthYear, currentYear))

// console.log(calcAge('1995', 2022))

function under21(bY: number, cY: number): boolean{
    let age:number = cY - bY
    return age < 21
}

// console.log(under21(birthYear, currentYear))

// console.log(under21(2015, currentYear))
// const isUnderAge: number = under21(2015, currentYear)

// console.log(isUnderAge)