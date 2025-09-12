// array iteration methods -> looping through an array executing statements once on the elemets

// syntax

const days = ['Wed', 'Thur', 'Fri'];
console.log(days.length);
for (let i = 0; i < days.length; i++) {
	const element = days[i];
	console.log(i);
	console.log(element);
}

let count = 0;

while (count < 4) {
	console.log(`Count ${count}`);
	// count ++
	count = count + 1;
}

console.log(count);

let i = 0;
console.log(days[i]);
while (i < days.length) {
	console.log(i);
	console.log(i);
	console.log(days[i]);
	i++;
}
console.log(i);

// iteration methods
const fruits = ['apple', 'mango', 'orange', 'dates'];

// indexOf -> returns the index of a value or -1 if it does not exist
console.log(fruits.indexOf('mango'));
console.log(fruits.indexOf('pineapple'));

const scores = [56, 73, 98, 62, 36, 72];
// find -> retrieve a single value that matches a conditions
const scoreAbove60 = scores.find((score) => {
	if (score > 60) {
		return score;
	}
});
console.log(scoreAbove60);

function filterScore(score) {
	console.log(score);
	if (score > 90) {
		return score;
	}
}

const singleScore = 99;
console.log(filterScore(98));
console.log(filterScore(45));

function second(score) {
	// const score = 50;
	if (score > 60) {
		return score;
	}
}

console.log(second(34));
console.log(second(83));
const newScore = 45;
console.log(second(newScore));

// callback functions -> functions passed into other function as arguments
// first class citizens -> we can treat functions like other values
const calculate = function (num1, num2) {
	return num1 + num2;
};
console.log(calculate(2, 2));
console.log(calculate(3, 4));
// console.log(calculate())
// console.log(calculate())
// arrow functions allow implicit return
const sum = (num1, num2) => num1 + num2;
console.log(sum(5, 5));

function greet(name, func) {
	console.log(name);
	console.log(func());
	return `Hello, ${name}`;
}
// const person = "Tony Stark"
// console.log(greet(person))
// console.log(greet("Dr Strange"))
function morningGreeting() {
	return 'Good morning';
}
let func = morningGreeting;
console.log(func());
let newFunc = morningGreeting();
console.log(newFunc);

greet('John', morningGreeting);

const study = function read() {
	return 'Peter is reading';
	console.log('first');
};

const newPerson = 'Parker';
console.log(study());
console.log(newPerson);

// find method -> returns the first element that meets a condition
// it accepts a callback
const students = [
	{
		name: 'Peter',
		score: 40,
	},

	{
		name: 'Jane',
		score: 80,
	},
	{
		name: 'Nus',
		score: 75,
	},
];

function getHighScore(student) {
	if (student.score > 60) {
		return student;
	}
}

console.log(students[1].score);
console.log(getHighScore(students[1]));
console.log(getHighScore(students[2]));

const studentWithScoreAbove60 = students.find(getHighScore);
console.log(studentWithScoreAbove60);

let anotherStudentWithAbove60;

for (let i = 0; i < students.length; i++) {
	const student = students[i];

	if (student.score > 60) {
		anotherStudentWithAbove60 = student;
		break; //used inside the for loop to stop execution
	}
}

console.log(anotherStudentWithAbove60);

// filter -> returns multiple elements that meet a condition
const studentsAbove60 = students.filter(getHighScore);
console.log(studentsAbove60);

// filtering using the while loop/for loop
const studentsAbove60Two = [];
for (let i = 0; i < students.length; i++) {
	const student = students[i];

	if (student.score > 60) {
		// save this student inside new array
		studentsAbove60Two.push(student);
	}
}
console.log(studentsAbove60Two);

// map -> iterates over an array while modifying each element and returning the modified array
const names = ['ibrahim', 'julius', 'nicole'];
const capitalizeAllCharacters = names.map((name) => name.toUpperCase());
console.log(capitalizeAllCharacters);
console.log(names);

const firstName = 'jeff';
console.log(firstName.replace(firstName[0], firstName[0].toUpperCase()));

const modifiedNames = names.map((name) => {
	return name.replace(name[0], name[0].toUpperCase());
	return name.charAt(0).toUpperCase() + name.slice(1);
	return name[0].toUpperCase() + name.slice(1);
});
console.log(modifiedNames);

// sort -> sort items in asc/desc manner
const sortedNames = names.sort((a, b) => b - a);
console.log(sortedNames);

console.log(['a', 'd', 'c', 'f'].sort((a, b) => b - a));
console.log([12, 33, 32, 43, 3].sort((a, b) => b - a));
const sortedStudents = students.sort((a, b) => b.score - a.score);
console.log(sortedStudents);
// reduce -> used for aggregation

const numbers = [1, 2, 3, 4, 5];
const numbersSum = numbers.reduce((prev, curr) => {
	console.log(prev);
	console.log(curr);
	return prev + curr;
}, 0);
console.log(numbersSum);

const prices = [23, 32, 34, 20];
const total = prices.reduce((prev, curr) => {
	console.log(prev);
	console.log(curr);

	return prev + curr;
}, 0);
console.log(total);

// 0 + 23 = 23
// 23 + 32 = 55
// 55 + 34 = 89
// 89 + 20 = 109
const orders = [
	{
		item: 'Oraimo watch',
		price: 2500,
		quantity: 2,
	},
	{
		item: '1 meter cable',
		price: 899,
		quantity: 2,
	},
];

const orderTotal = orders.reduce((prev, curr) => {
	console.log(prev);
	console.log(curr);
	return prev + curr.price * curr.quantity;
}, 0);
console.log(orderTotal);

// verify we are dealing with an array
const data1 = 324;
console.log(typeof data1);
const data2 = [];
console.log(typeof data2);

if (typeof data1 == 'boolean') {
	console.log('It is a boolean');
} else {
	console.log(`It is a ${typeof data1}`);
}

console.log(Array.isArray(data1));
