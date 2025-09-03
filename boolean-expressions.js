// Boolean expressions -> anything that evaluates to true or false

// Number operators
console.log(10 < 5)
console.log(3 == 3)
console.log(67 >= 676)

// comparision

// loose equality operator == checks if the values are equal
console.log(7 == "7")
// loose inequality !=
console.log(7 != "7")

// strict equality === (checks if the value and datatype matches)
console.log(7 === "7")
// strict inequality !==
console.log(7 !== "7")

// logical operators

// ! bang operator - does the opposite
console.log(!true)
console.log(!false)
console.log(!"")
console.log(!Boolean(""))

// double bang !!
console.log(!!"")
console.log(!!"false")

// and && -> ampasand -> we use to combine multiple expressions (all expressions must be true)

const age = 27
const location = "Nairobi"
const hasADegree = true

console.log(age >= 18 && location === "Nairobi")

// or || double pipes
console.log(age >= 18 || location === "Nairobi")

console.log(age >= 18 && (location === "Nairobi" || hasADegree == false))
// console.log(location === "Nairobi")
// console.log(hasADegree == false)

// Datatypes (strings, booleans, numbers, null, undefined)
// Boolean expressions
