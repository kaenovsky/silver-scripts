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
// const passwd = prompt("Please type your new password.");

// Check if input is > 6 characters
// Check if input has no blank spaces

if (passwd.length < 6) {
    console.log("Your pass is too short!");
} else if (passwd.indexOf(' ') !== -1 ) {
    console.log("Your pass can't have blank spaces!");
} else {
    console.log("Your pass is ok!");
}

// ~~~~~~~~~~~~~ [Nesting] ~~~~~~~~~~~~~