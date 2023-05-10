const secretNumber = 21
const primeNumber = 7
const moduloNumber = 29

const A = Math.pow( primeNumber, 21 ) //% moduloNumber
const B = Math.pow( primeNumber, 19) //% moduloNumber
// const AB = Math.pow(B, 21) % moduloNumber
// const BA = Math.pow(A, 19) % moduloNumber
console.log("A is: " + A)
console.log("B is: " + B)
// console.log("AB modulo 29 is: " + AB)
// console.log("BA modulo 29 is: " + AB)