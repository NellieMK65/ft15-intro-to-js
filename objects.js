/**
 * Objects -> datatypes used to store collection of related data consisting of
 * key value pairs
 *
 * The values can be of any datatype
 *
 * we use the curly brackets -> {}
 */

const car = {
	color: 'Black',
	brand: 'BMW',
	speed: 260,
	year: 2018,
	preOwned: false,
	isElectric: false,
	owner: {
		firstName: 'Yvonne',
		lastName: 'Kajuju',
		// special key (very rare) -> we are not using the camelCase naming
		// convention
		['full name']: 'Yvonne Kajuju',
	},
};

// accessing values inside an object
// 1. Dot notation (.) -> most common way
console.log(car.year);
console.log(typeof car.owner);
console.log(car.owner.firstName);
console.log(car.owner['full name']);

// 2. Square bracket notation ([]) -> dynamically access values
// it can also be used when dealing with special keys
console.log(car[`year`]);
console.log(car['owner']['full name']);

// assignment
const brandKey = 'brand';

// lookup
console.log(brandKey);
// access values dynamically
console.log(car[brandKey]);

const abigael = 'isElectric';
console.log(abigael);
// when using the square bracket, the key must provided in string format
console.log(car['color']);
console.log(car[abigael]); // evaluation -> console.log(car['year'])
console.log(car['year']);

// add more properties (key/value pairs)
console.log(car.isManual);
car.isManual = true;
console.log(car);
console.log(car.isManual);
car['driveModes'] = ['sport', 'comfort', 'racemode'];
console.log(car.driveModes);

// update properties
console.log(car.year);
car.year = 2025;
console.log(car.year);

// deleting properties
console.log(car.year);
delete car.year;
console.log(car.year);

// Object methods
// 1. Object.keys() -> returns an array of object keys
console.log(Object.keys(car));

// 2. Object.values() -> returns an array of object values
console.log(Object.values(car));

// DEMO CODE -> combining some array and objects concepts
const student = {
	firstName: 'Jeff',
	lastName: 'Ouda',
};

console.log(Object.keys(student));

for (const key of Object.keys(student)) {
	console.log(student[key]);
}

const firstNameKey = 'firstName';
console.log(student[firstNameKey]);
console.log(student['firstName']);
