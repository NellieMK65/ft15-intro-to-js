// Variables -> a container in which we can store values for later retrieval

/**
 * 1. case sensitive
 * 2. use camelCase naming convention
 * 3. Do not start with numbers (start with lowercase letters)
 * 4. Do not use reserved keywords
 *
 */

// The var keyword has issues with scoping (global, local) and allows redeclaring
var firstName = "Joyce"
console.log(firstName)
var firstName = "John"
lastName = "Njogu"

console.log(firstName)

// const keyword which allows us to create immutable (the values cannot/should not change) values
// it does not allow redeclaring or reassigning
const fullName = "Jane Doe"

console.log(fullName)

// let keyword which allows us to create mutable values
let age = 18
console.log(age)
age = 19 // reassinging
console.log(age)


// const -> it does not allow redeclaration and also reassignign
const cohort = "SDF-FT15"
console.log(cohort)
// cohort = "SDF-FT13" // this brings an error since we cannot assign a new value to a constant variable
console.log(cohort)
// let -> enables changing of values (reassigning), it does not allow redeclaration
let name = "Peter"
console.log(name)
// reassign -> give a new value
name = "Elly"
console.log(name)
