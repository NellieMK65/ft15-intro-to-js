/**
 * Data types -> kind if values a program can store (they allow us to represent real world data in a
 * programming language)
 *
 * 1. Primitive -> string, boolean, number, symbols, null, undefined
 * 2. Non-primitive -> objects (classes create objects), array
 */

// 1. Strings -> characters, texts, parapgraphs
const firstName = "Victor" // double quotes
const lastName = 'Koech' // single quote
const fullName = `Charles Babagge` // backticks

// string concatenation -> combining of strings using the + operator
console.log("MBE " + firstName + " " + lastName)

// string interpolation -> injecting of values into strings (we must always use backticks)
console.log(`MBE ${firstName} ${lastName}, age is ${2025 - 2002}`)
