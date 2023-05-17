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