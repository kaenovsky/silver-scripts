// Guess the number game (between 0 and 20)

const secretNum = Math.floor((Math.random() * 20) + 1);
let userGuess = prompt('Guess the number! (or type q to quit)');

while (userGuess !== secretNum) {
    if (userGuess === 'q') {
        alert('Ok, you quit the game.');
        break;
    } else if (userGuess < secretNum) {
        userGuess = prompt('Too low, try again!');
    } else if (userGuess > secretNum) {
        userGuess = prompt('Too high, try again!');
    } else if (userGuess == secretNum) {
        alert('You got it right!');
        break;
    } else {
        userGuess = prompt('Try again with a valid number!');
    }
}

console.log(`secret number was ${secretNum}`);
console.log('out of loop :) game is over');