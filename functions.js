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

// Function call inside a function

function callTenTimes(func) {
    for (let i = 0; i < 10; i++) {
        func();
    }
}

function rollDie() {
    randomNum = Math.floor(Math.random() * 6) + 1;
    console.log(randomNum);
}

// Factory function

function makeBetween(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetween(0, 18);
const isAdult = makeBetween(19, 65);
const isSenior = makeBetween(65, 120);

// Creating our own method

const myMath = {
    PI: 3.141559,
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    },
    // shorthand
    add(x, y) {
        return x + y;
    }
}

console.log(`using my custom add method to add 5+2: ${myMath.add(5,2)}`);

// Coding quiz method

const square = {
    area(sideLen) {
        return sideLen * sideLen;
    },
    perimeter(side) {
        return side * 4;
    }
}

// this keyword

const cat = {
    name: 'blanquito',
    color: 'white',
    meow() {
        console.log('~~~ meow meow ~~~');
    },
    sayColor() {
        console.log(`my color is ${this.color}`);
    }
}

// egg laying code exercise

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG';
    }
}

// Try catch error handling

function yell(word) {
    try {
        wordToYell = word.toUpperCase().repeat(3);
        console.log(wordToYell);
    } catch (error) {
        console.log('error found! Are you using a string? See error below: ');       
        console.log('**************')
        console.log(error);
        console.log('**************')
    }
}

// forEach

const numbs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbs.forEach(function(el) {
    console.log(el);
})

// use map to double every number of array

const doubles = numbs.map(function(num) {
    return num * 2;
})

console.log(doubles);

// example with movies

const movies = [
    {
        title: 'The Matrix',
        score: 96
    },
    {
        title: 'V for Vendetta',
        score: 79
    },
    {
        title: 'City of God',
        score: 88
    }
]

const titles = movies.map(function(movie) {
    return movie.title;
})

console.log(titles);

// Arrow functions

const addNumbers = (x, y) => {
    return x + y;
}

const squareFunc = (num) => {
    return num ** 2;
}

const rollOtherDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

// implicit return syntax example in one line

const isEven = (x) => (x % 2 === 0);
const multiply = (x,y) => (x * y);