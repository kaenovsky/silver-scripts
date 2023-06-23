// selectors
const h2 = document.querySelector('h2');
const btn = document.querySelector('button');
const body = document.querySelector('body');

// rbg colors variables
let rgbColors = [255, 255, 255];

// make random color
const randomColor = () => {
    for (let i = 0; i < rgbColors.length; i++) {
        let newRanCol = Math.floor((Math.random() * 255) +1);
        rgbColors[i] = newRanCol;
    }
    return rgbColors;
}

btn.addEventListener('click', () => {
    randomColor();
    let bgColor = `rgb(${rgbColors[0]}, ${rgbColors[1]}, ${rgbColors[2]})`;
    console.log(bgColor);
    h2.innerText = `wow! ${bgColor}, that is a nice random rgb color :)`;
    body.style.backgroundColor = bgColor;
})
