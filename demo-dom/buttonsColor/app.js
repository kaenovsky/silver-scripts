// click me text inside buttons
const allButtons = document.querySelectorAll('button');
const allSpans = document.querySelectorAll('span');

// rbg colors variables
let rgbColors = [255, 255, 255];

// make random color
const randomColor = () => {
    for (let i = 0; i < rgbColors.length; i++) {
        let newRanCol = Math.floor((Math.random() * 255) +1);
        rgbColors[i] = newRanCol;
    }
    return `rgb(${rgbColors[0]}, ${rgbColors[1]}, ${rgbColors[2]})`;
}

function colorize() {
    this.style.backgroundColor = randomColor();
}

for (let b of allButtons) {
    b.addEventListener('click', colorize);
}

for (let s of allSpans) {
    s.addEventListener('click', colorize);
}