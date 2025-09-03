/**
 * Data types -> kind if values a program can store (they allow us to represent real world data in a
 * programming language)
 *
 * 1. Primitive -> string, boolean, number, symbols, null, undefined
 * 2. Non-primitive -> objects (classes create objects), array
 */

// 1. Strings -> characters, texts, paragraphs
const firstName = "Victor" // double quotes
const lastName = 'Koech' // single quote
const fullName = `Charles Babagge` // backticks

console.log(typeof fullName)

// string concatenation -> combining of strings using the + operator
console.log("MBE " + firstName + " " + lastName)

// string interpolation -> injecting of values into strings (we must always use backticks)
console.log(`MBE ${firstName} ${lastName}, age is ${2025 - 2002}`)

// 2. numbers -> whole numbers, negatives, decimals
console.log(typeof -34)
console.log(typeof 74)
console.log(typeof 8.3)

console.log(2  + (5 / 6))

// 3. boolean-> true/false

console.log(Boolean("gh"))
console.log(Boolean(``))
console.log(Boolean(0))
console.log(Boolean(-23))
console.log(Boolean(null))
console.log(Boolean(undefined))

// 4. objects -> collection of related data represented in key/value pairs separated by commas
const student = {
    name: 'Jane Doe',
    gender: "Female",
    age: 20,
    single: true,
    class: {
        cohort: 'SDF-FT15',
        room: 103,
    }
}

console.log(typeof student)
// accessing values in objects i.e lookup

// 1. dot notation
console.log(student.name)
console.log(student.class.room)

// 2. square bracket
console.log(student['age'])
console.log(student['class']['cohort'])

const car = {
    color: 'Black',
    brand: 'Mercedes',
    speed: 260,
    isOwned: true,
    owner: {
        name: 'Emmanuel',
        address: {
            county: "Nairobi",
            postalAddress: 1000
        }
    }
}

console.log(car['owner']['address']['county'])
console.log(car['owner']['address'].county)
console.log(car.owner["address"].postalAddress)

const person = {
    name: 'Carl'
}

// 5. arrays -> list of values (can be of any datatype) -> we use the square bracket notation
// arrays are considered special types of objects
// the array uses what we call the index i.e position of the value in the array -> always starts at 0
const students = ['Brad', 'John']
console.log(typeof student)
console.log(students[0])
console.log(students[1])

// Get the second feature of the Tesla Model 3 car3
const cars = [
  {
    make: "Toyota",                   // String
    model: "Camry",                   // String
    year: 2022,                       // Number
    isElectric: false,               // Boolean
    features: ["Bluetooth", "Backup Camera", "Cruise Control"], // Array
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    isElectric: true,
    features: ["Autopilot", "Touchscreen", "Over-the-air updates"],
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2020,
    isElectric: false,
    features: ["V8 Engine", "Rear-Wheel Drive", "Convertible"],
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2021,
    isElectric: false,
    features: ["Eco Mode", "Lane Assist", "Heated Seats"],
  },
  {
    make: "Chevrolet",
    model: "Bolt EV",
    year: 2024,
    isElectric: true,
    features: ["Fast Charging", "Regenerative Braking", "Apple CarPlay"],
  }
];

console.log(cars[1].features[1])
console.log(cars[1]['features'][1][0])

console.log("object"[1])

// 5. null -> to intentionally indicate there is no value

const laptop = {
    serialNumber: null
}

// undefined -> no value is provided

const myvariable = "must provide a value"

let myAge;

console.log(typeof myAge)

myAge = 25;

console.log(typeof myAge)
