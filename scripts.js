// ~~~~~~~~~~~~~ [str template literals] ~~~~~~~~~~~~~

// Template literals are strings that allow embedded expressions
// which will be evaluated and the turned into a resultin string

let myTemplateLiteral = `I counted ${3 + 4} sheep`;

let qty = 4;
let onion = 12.20;

let buy = `you bought ${qty} onions. Total price is: ${onion * qty}`;

// ~~~~~~~~~~~~~ [undefined & null] ~~~~~~~~~~~~~

let loggedInUser = null; // this is null
let myVar; // this is undefined

// ~~~~~~~~~~~~~ [Math Object] ~~~~~~~~~~~~~

// Most common example is the value of PI
console.log('Value of pi is: ' + Math.PI);

// There are many useful Math values
// floor, ceil, min, max

// Random is the main thing we want to focus

console.log('This num is so random: ' + Math.random());

// Random numbers from 0 to 5
// without the decimals

console.log(Math.floor((Math.random() * 5) + 1));

// ~~~~~~~~~~~~~ [If statement] ~~~~~~~~~~~~~

let coin = Math.random();

if(coin >= 0.5) {
    console.log("Your coin is heads");
} else {
    console.log("Your coin is tails");
}

// ~~~~~~~~~~~~~ [If-else statement] ~~~~~~~~~~~~~

let daysArr = ['Mondays', 'Fridays', 'Wednesdays'];
let dayOfWeek = Math.floor((Math.random() * 3));

if (dayOfWeek == 0) {
    console.log(`oh no :/ i hate ${daysArr[0]}`);
} else if (dayOfWeek == 1) {
    console.log(`Yay :D i <3 ${daysArr[1]}`);
} else {
    console.log(`I don't mind ${daysArr[2]}`);
}

// ~~~~~~~~~~~~~ [Nesting] ~~~~~~~~~~~~~

// uncomment next line to test prompt
const passwd = prompt("Please type your new password.");

// Check if input is > 6 characters
// Check if input has no blank spaces

if (passwd.length < 6) {
    console.log("Your pass is too short!");
} else if (passwd.indexOf(' ') !== -1 ) {
    console.log("Your pass can't have blank spaces!");
} else {
    console.log("Your pass is ok!");
}

// ~~~~~~~~~~~~~ [AND OR] ~~~~~~~~~~~~~

// Using the same password const from line 61

if (passwd.length >= 6 && passwd.indexOf(' ') === -1) {
    console.log("Valid password :)");
} else {
    console.log("Not a valid password :(");
}

// Theme park example. Ticket is based on age:
// age  0 to 5     === FREE
// age  6 to 12    === $10
// age  13 to 65   === $20
// age  66 to 120  === FREE

const age = 5;

if ((age >= 0 && age <= 5) || (age >= 65 && age <= 110)) {
    console.log("Free ticket");
} else if (age >= 6 && age <= 12) {
    console.log("$10 ticket");
} else if (age >= 13 && age <= 65) {
    console.log("$20 ticket");
} else {
    console.log("Error: age must be a number between 0 and 120");
}

// ~~~~~~~~~~~~~ [!NOT] ~~~~~~~~~~~~~

!null // True
!(0 === 0) // False
!(3 <= 4) // False

// ~~~~~~~~~~~~~ [Arrays] ~~~~~~~~~~~~~

let students = []; // empty array
let colors = ['red', 'blue', 'green']; // strings array
let nums = [45, 52, 33, 0, 9]; // numbers array
let mixArr = [8, 'mixx', true, null]; // data mixed array

// Change the value of array element
console.log(colors); // 1st value
colors[2] = 'pink';  // mod value
console.log(colors); // new value

// ~~~~~~~~~~~~~ [Arrays Methods] ~~~~~~~~~~~~~

// pop, push, shift, unshift

let peopleInLine = ['mike', 'josh', 'li', 'hua'];

console.log(peopleInLine);
peopleInLine.push('annie');
console.log(peopleInLine);
peopleInLine.pop();
console.log(peopleInLine);

// Planets example

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];
console.log(planets);
planets.shift();
planets.push('Saturn')
planets.unshift('Mercury');
console.log(planets);

// Other methods

// concat two arrays

let peopleAndPlanets = peopleInLine.concat(planets);
console.log(peopleAndPlanets);

// includes method

console.log(planets.includes('Saturn')); // returns true

// reverse method

let reversePlanets = planets.reverse();
console.log(reversePlanets);

// slice method

console.log(planets.slice(2, 5));

// slplice method

console.log(planets.splice(2, 5));

// nested arrays

tttBoard = [
    ['X', 'O', 'X'],
    ['O', null, 'X'],
    ['O', 'X', null]
];

// Objects

const personObj = {name: 'Li', lastName: 'Hua'};

// Two ways of retrieving the object's properties

console.log(personObj['lastName']); // Hua
console.log(personObj.lastName); // Hua

// Add new key value pairs to object
// Both syntax works

console.log(personObj);
personObj.age = 28;
console.log(personObj);
personObj['isMarried'] = true;
console.log(personObj);

// Array + Objects
// Sometimes it makes sense to use an array within an object
// Sometimes it's better the other way around

const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.99,
        quantity: 3,

    },
    {
        product: 'Chess',
        price: 10.50,
        quantity: 4,

    },
    {
        product: 'TEG',
        price: 5.99,
        quantity: 2,

    }
]

console.log(shoppingCart); // Array of Objects

const student = {
    firstName: 'Luke',
    lastName: 'Beetz',
    languages: ['Python', 'C++', 'Go'],
    exams: {
        midterm: 92,
        final: 89
    }
}

console.log(student); // Object with array and other object 

console.log(shoppingCart[1].quantity); // 4
console.log(student.languages[1]); // C++

// For loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// For loop exercise

for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// For loop through an array of animals

let animals = ['lion', 'octopus', 'zebra', 'wolf', 'cat', 'snake'];

for (let i = 0; i < animals.length; i++) {
    console.log(i + 1, animals[i]);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// go the other way around

for (let i = animals.length - 1; i >= 0; i--) {
    console.log(i + 1, animals[i]);
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

// Nested arrays

const seatingChart = [
    ['Tom', 'Zeke', 'Yuko'],
    ['Ami', 'Lakshmi', 'Erin'],
    ['Lua', 'Ho', 'Pablo']
];

// find each name in nested arrays

for (let i = 0; i < seatingChart.length; i++) {
    let row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

// while loop -useful when we don't know how many iterations the loop will take-

const SECRET = 'Calavera';

let guess = prompt('type your secret pass: ');

while (guess !== SECRET) {
    guess = prompt('wrong pass! Type your secret pass again:');        
}

console.log('You nailed it :) the pass is ' + guess);

// break out of a while loop

let inputUser = prompt('say something!');

while (true) {
    inputUser = prompt(inputUser);
    if (inputUser.toLowerCase() === 'stop copying me') {
        break;
    }
}

console.log('Ok you win!');

// for of...iterable

for (animal of animals) {
    console.log('The animal is ' + animal);
}