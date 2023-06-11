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
    },
    {
        title: 'Home Alone',
        score: 67
    },
    {
        title: 'The room',
        score: 20
    },
    {
        title: 'Kill Bill',
        score: 77
    },
    {
        title: 'Fast & Furious 7',
        score: 56
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

// setTimeout() and setInterval()

console.log('Hey this is so fast');

setTimeout(() => {
    console.log('hey, u still there?');
}, 3000);

console.log('this message goes fast as well');

const id = setInterval(() => {
    console.log('this message is going to repeat a few times');
    console.log(Math.random());
}, 700);

setTimeout(() => {
    console.log('now the interval will end');
    clearInterval(id);
}, 1000);

// filter

const goodMovies = movies.filter(m => (m.score > 75));
const badMovies  = movies.filter(m => (m.score < 75));

console.log('the movies with good score are these: ')
console.log(goodMovies);

console.log('~~~~~~~~~~~~~~~~~');

console.log('the movies with bad score are these: ')
console.log(badMovies);

console.log('~~~~~~~ good movie titles ~~~~~~~');
const goodTitles = goodMovies.map(m => (m.title));
console.log(goodTitles);

// Code exercise

userNamesDemo = ['Mike', 'Tom', 'Hank', 'Lee', 'Constantine', 'Jeremiah', 'Christopher'];

function validUserNames(usernames) {
    return usernames.filter(name => (name.length < 10));
  }

// every and some

const longNames = userNamesDemo.every(n => (n.length < 4));
console.log(`Is every name shorter than 4? Response: that's ${longNames}.`);

const shortNames = userNamesDemo.some(n => (n.length < 4));
console.log(`Is any of the names shorter than 4? Response: that's ${shortNames}.`);

// code quiz some/every

function allEvens(nums) {
    return nums.every(n => (n % 2 === 0));
}

// reduce method

// find lower score movie

const bestScoreMovie = movies.reduce((maxScore, currentMovie) => {
    if(currentMovie.score > maxScore.score) {
        return currentMovie;
    } else {
        return maxScore;
    }
});

// default params

function multiplyWithDefault(x, y = 1) {
    return x * y;
}

// same idea with die example

function rollCoolerDie(sides = 6) {
    // default 6 sides
    let die = Math.floor(Math.random() * sides) + 1;
    console.log(die);
}

// spread

const coolNumbers = [2, 5, 6, 8, 32, 355, 72, 21, 58, 9];
console.log('The max number of coolNubers Array is: ' + Math.max(...coolNumbers));
console.log('The min number of coolNubers Array is: ' + Math.min(...coolNumbers));

// spread with iterable elements (such as arrays)

const dogs = ['vainilla', 'lola', 'titan'];
const cats = ['leo', 'nosey', 'hasan'];
const allPets = [...dogs, ...cats];
console.log(allPets);

// spread within functions to capture all params

function raceResults(gold, silver, ...everyone) {
    console.log(`the gold medal goes to: ${gold}`);
    console.log(`the silver medal goes to: ${silver}`);
    console.log(`Thanks everyone who registered: ${everyone}`);
}

// array destructuring

const raceResultsArr = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp', 'Phil Allen', 'Mark Garfield', 'Adam Holmes'];

const [gold, silver, bronze, ...everyoneElse] = raceResultsArr;

// object destructuring

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}

const { first, last, country } = runner;

// renaming variables from object

const { country: nationality } = runner;

console.log(nationality);
