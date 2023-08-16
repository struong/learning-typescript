import addNumbers, { addStrings, getName } from "./functions";


console.log(addNumbers(1, 2))
// console.log(addNumbers(1, "test"))

console.log(addStrings("Hello", "World"))
console.log(addStrings("Hello"))

console.log(getName({ first: "John", last: "Doe" }))