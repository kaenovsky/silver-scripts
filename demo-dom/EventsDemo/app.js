window.addEventListener('keydown', (e) => {
    // ~~~ Key object ~~~
    // console.log(e);
    // ~~~ Key code ~~~
    // console.log(e.code)
})

// use only certain keys

window.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'ArrowUp':
            console.log('UP :) ');
            break;
        case 'ArrowDown':
            console.log('DOWN :( ');
            break;
        case 'ArrowLeft':
            console.log('## LEFT');
            break;
        case 'ArrowRight':
            console.log('RIGHT ##');
            break;
        default:
            console.log('Lets ignore this key!');
            break;
    }
})

// change event
const input = document.querySelector('input');

input.addEventListener('change', (e) => {
    console.log('something has changed!');
})

// change h1 when we type (input event)
const h1 = document.querySelector('h1');

input.addEventListener('input', (e) => {
    h1.innerText = input.value;
})

// input event code quiz

// const input = document.querySelector('#username');
// const h1 = document.querySelector('h1');

// input.addEventListener('input', (e) => {
//     h1.innerText = 'Welcome, ' + input.value;
//     if (input.value == '') {
//         h1.innerText = 'Enter Your Username';
//     }
// })

// stop propagation (Event bubbling)

const div = document.querySelector('#container');
const btn = document.querySelector('#btn');

// when btn is clicked, colorize the div

// make random color

let rgbColors = [255, 255, 255];

const randomColor = () => {
    for (let i = 0; i < rgbColors.length; i++) {
        let newRanCol = Math.floor((Math.random() * 255) +1);
        rgbColors[i] = newRanCol;
    }
    return `rgb(${rgbColors[0]}, ${rgbColors[1]}, ${rgbColors[2]})`;
}

btn.addEventListener('click', (e) => {
    div.style.backgroundColor = randomColor();
    e.stopPropagation(); // comment this to hide div
})

// hide element - this should not run because of stopPropagation()

div.addEventListener('click', () => {
    div.classList.toggle('hide');
})