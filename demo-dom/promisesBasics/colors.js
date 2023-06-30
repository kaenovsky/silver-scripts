const body = document.querySelector('body');
const square = document.querySelector('.square');
const colors = ['darkred', 'darkorange', 'gold', 'forestgreen', 'dodgerblue', 'indigo', 'violet'];

// change background color with promise

const changeBg = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

changeBg(colors[0], 2000)
    .then(() => changeBg(colors[1], 2000))
    .then(() => changeBg(colors[2], 2000))
    .then(() => changeBg(colors[3], 2000))
    .then(() => changeBg(colors[4], 2000))
    .then(() => changeBg(colors[5], 2000))
    .then(() => changeBg(colors[6], 2000))


// refactor with async await

const changeSquare = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            square.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

async function backwardsRainbow() {
    await changeSquare(colors[6], 2000)
    await changeSquare(colors[5], 2000)
    await changeSquare(colors[4], 2000)
    await changeSquare(colors[3], 2000)
    await changeSquare(colors[2], 2000)
    await changeSquare(colors[1], 2000)
    await changeSquare(colors[0], 2000)
}

backwardsRainbow();