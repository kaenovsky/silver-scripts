console.log('***** functions *****');

function singSong() {
    console.log('compa, qué le parece esa morra');
    console.log('la que está bailando sola');
    console.log('me gusta pa mí');
};

function greet(firstName) {
    console.log('hi there ' + firstName);
}

function rant(message) {
    for (let i = 0; i < 3; i++) {
        console.log(message.toUpperCase());
    }
}

function greetComplete(firstName, lastName) {
    // print first name and initial of last name
    console.log(`hello ${firstName}, ${lastName[0]}.`);
}

function repeat(text, times) {
    for (let i = 0; i < times; i++) {
        console.log(text);
    }
}

// Using the return keyword

function add(x, y) {
    return x + y;
}

let totalSum = add(43, 4);
console.log(totalSum);

// coding quiz

nums = [4,6,7,8,3,5];
numsEmpty = [];

function lastElement(arr) {
    let arrLen = arr.length;
    if (arrLen === 0) {
        return null;
    } else {
        return arr[arrLen - 1];
    }
}

// coding quiz 2

function capitalize(word) {
    let capital = word[0].toUpperCase();
    let restOfW = word.slice(1, word.length);
    let result = capital + restOfW;
    console.log(`the capitalize word is: ${result}`);
    return result;
}

// coding quiz 3

function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}

// Coding quiz 4

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function returnDay(day) {
    if (day > 7 || day < 1) {
        return null;
    } else {
        return days[day - 1];
    }    
}