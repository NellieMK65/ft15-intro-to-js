/**
 * Functions -> reusability, blocks of code organized together
 * and can be called at any time
 *
 * parameters -> these are variables that are used inside the function paranthesis
 * arguments -> arguments are the values we pass to functions when we call/invoke them
 */

// function declaration
function calculateTax(parameters) {
	console.log('Calculate tax');
}

// executing a function via calling/invoking
// we have to use the function name and provide the paranthesis which
// may optionally have arguments
calculateTax();

function greet(name, time) {
	// return;
	return `Good ${time}, ${name}`;
	console.log('Am i working?');
}

// greet("assistant tm");
console.log(greet('Elly', 'afternoon'));

/**
 * return keyword -> allows functions to give(return values)
 * we can only have one return statement in a scope or block of code
 * stops execution of a function
 */
function sum(x, y) {
	if (typeof x === 'number' && typeof y === 'number') {
		// we are checking for truthy
		return x + y;
	} else {
		return 'x and y must be a number';
	}
}

/**
 * Expression -> evaluation
 * -> constant
 * -> assignment
 * -> lookup
 */

console.log(sum(3));
const output = sum(4, 3);
console.log(output);
const mySum = 83 + 7;
console.log(mySum);

/**
 * First-class functions -> in js functions can be treated like any other values (string, number)
 * Arrow functions
 * Callback functions
 */
// console.log(name) //we cannot access a variable before its declared
const name = 'Peter';
console.log(name);

// arrow function syntax
const sayHi = (params) => {
	// function body
};

// we have declared an arrow function
const add = (x, y) => {
	return x + y;
};

console.log(add(10, 10));

// TODO function hoisting
// TODO default values for functions

const calculate = function perimeter(l, w) {
	return l * 2 + w * 2;
};

function greeting(name) {
	console.log(`Good morning, ${name}`);
}

// assignment exp
const person = 'John Doe';

// lookup exp
greeting(person);

greeting('Abigael');

greeting('Tony');

function run(greet) {
	console.log('Running');
	// callback function (we still have to call/invoke function passed as
	// arguments)
	greet('Elly');
}

// let greet = function () {
//     console.log("Get into breakout rooms")
// }

// greet()

// calling/invoking
run(function () {
	console.log('Get into breakout rooms');
});
