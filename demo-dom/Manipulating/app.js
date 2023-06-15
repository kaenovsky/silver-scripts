const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

// nextElementSibling and previousElementSibling

const squareImg = document.querySelector('.square');

console.log(squareImg.nextElementSibling);

// appendChild()

const newImg = document.createElement('img');
document.body.appendChild(newImg);
newImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Chessboard480.svg/264px-Chessboard480.svg.png';
newImg.classList.add('square');

const newH3 = document.createElement('h3');
newH3.innerText = 'I am a new h3 o/';
document.body.appendChild(newH3);

// append()

const firstP = document.querySelector('p');
firstP.append(' I am a new string that will be at the end of the p element!! :) ');

// prepend()

const newB = document.createElement('b');
newB.innerText = 'I am a new B element that will be added to the first line';
firstP.prepend(newB);

// insertAdjacentElement()

const newH2 = document.createElement('h2');
newH2.append('I am an h2 element!'); // this is the same as doing innerText
const h1 = document.querySelector('h1'); // newH2 will be placed after this
h1.insertAdjacentElement('afterend', newH2);

// Quiz 100 buttons

const container = document.querySelector('#container');

for (let i = 0; i <= 100; i++) {
    const newButton = document.createElement('button');
    newButton.innerText = 'Hey!';
    container.appendChild(newButton);
}

// removeChild() and remove()

const firstLi = document.querySelector('li'); // this is the first li
const ulParent = document.querySelector('ul'); // this is the first ul
ulParent.removeChild(firstLi);

// remove the second image of square class

const allImg = document.querySelectorAll('.square');
const secondSquareImg = allImg[1];
secondSquareImg.remove();