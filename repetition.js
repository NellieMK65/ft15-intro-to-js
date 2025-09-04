// 1. Selection

// a. if statement
const age = 17;

if (age >= 18) {
	// runs if the expression is true
	console.log('You can vote');
} else {
	// runs if false, and it is not a must we provide it
	console.log('You cannot vote');
}

// check if person is allowed to enter staff area
const personA = 'student';
const personB = 'staff';

if (personB === 'staff') {
	console.log('Allowed of the staff area');
} else if (personB === 'student') {
	console.log('Not allowed, enter study area');
} else {
	console.log('Check your status');
}

// using the if statements, check if a grade is between A - E
// the marks should be between 0 - 100
const marks = 145;
if (marks < 0) {
	console.log('Invalid marks');
} else if (marks >= 0 && marks <= 40) {
	console.log('Grade E Awarded');
} else if (marks >= 50 && marks <= 59) {
	console.log('Grade D Awarded');
} else if (marks >= 60 && marks <= 69) {
	console.log('Grade C Awarded');
} else if (marks >= 70 && marks <= 79) {
	console.log('Grade B Awarded');
} else if (marks >= 80 && marks <= 100) {
	console.log('Grade A awarded');
} else if (marks > 100) {
	console.log('Invalid marks');
}

if (marks < 0 || marks > 100) {
	console.log('Invalid');
} else if (marks >= 80) {
	console.log('A');
} else if (marks >= 70) {
	console.log('B');
} else if (marks >= 60) {
	console.log('C');
} else {
	console.log('E');
}

// TODO use switch statement to get the grade

// 2. Repetition -> run a piece of code repeatedly until a certain condition
// is met

// a. while statement
// natural terminating loop
let count = 8;

while (count < 5) {
	console.log(`Count ${count}`);
	count = count + 1;
}

console.log(count);

let countTwo = 0;

// b. do/while
do {
	console.log(`Count ${countTwo}`);
	countTwo++;
} while (countTwo < 5);
