/**
 * Arrays -> list of values (any datatype)
 * we use the square brackets
 */

// 1. The array constructor (not very common)
const cars = new Array('Audi', 'Bmw', 2, false, null, undefined);
console.log(cars);
// 2. using the square bracket [] -> most common way
const fruits = ['Apple', 'watermelon', 'Orange'];
console.log(fruits);

// accessing values inside an array
// we use the index - position of an element inside the array
// ! The index always starts at 0
console.log(fruits[1]);
console.log(fruits[5]); // we get undefined for values that do not exist

// adding values
fruits[5] = 'Pineapple';
console.log(fruits);

// updating
fruits[2] = 'Banana';
fruits[3] = 'Kiwi';
fruits[4] = 'Peaches';
console.log(fruits);

// delete values
// mutating(destrcutive) & non-mutating(non-destructive)
delete fruits[5];
delete fruits[2];
console.log(fruits);

// array methods
