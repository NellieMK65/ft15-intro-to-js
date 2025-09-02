// Syntax -> rules associated with a programming language/tool (grammer)

// Execution order -> Left to right then top to bottom

// ! Comments do not get executed in any language
// single line comment

/**
 * Multiple
 * Lines
 * Like
 * so
 */

/**
 * Expression -> combination of numbers and variables and does not contain any
 * equal signs
 * -> any valid unit of code that resolves to a value
 * -> combination of data using symbols (+, -, /, *, **) (BODMAS) (PEMDAS)
 *
 * 1. Constant -> connnot change (does not need further evaluation)
 * 2. Assignment
 * 3. Lookup
 *
 * Evaluation -> Interpretation of code
 * -> breakdown of expressions to contants
 */

// command palette -> (ctrl(cmd) + shift + p)

console.log(1 + 1) // 2
console.log(2 + (3 - 5)) // (3 - 5) -> -2 -> (2 + (-2)) -> 0

// 2. Assignment expression -> assigning a value to a variable (container)
// we using the = operator
// on the left, we have the variable and on the right we have the value
// A variable is just a container to store values for later retrieval

/**
 * Rules for creating variables
 * 1. Should use the camelCase naming convention
 * 2. JS is case sensitive
 * 3. Don`t start variables with numbers, always start with a lowercase letter
 * 4. Do not use reserved keywords (words reserved for the programming language)
 * 5. As a rule of thumb always use const or let to create variables, there is is also the var keyword
 * but we are not going to use it
 */

firstName = "Elly"
lastName = "Owuor"

studentName = "Jane Doe"

age = 18

// 3. lookup expression
console.log(firstName)
console.log(AGE)
