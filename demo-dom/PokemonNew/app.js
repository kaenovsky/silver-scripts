// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
let baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 151; i++) {

    // create HTML elements
    const div = document.createElement('div');
    const subText = document.createElement('span');
    subText.innerText = i;
    
    // create image
    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}${i}.png`;

    // add elements to markup
    container.appendChild(div);
    div.appendChild(newImg);
    div.appendChild(subText);

    // add style to div element
    div.classList.add('pokemon');
        
}

// onclick
const poke = document.querySelector('.pokemon');
poke.onclick = () => {
    console.log('bulbasauuuur :3');
}

// adEventListener
poke.addEventListener('mouseup', function() {
    console.log('this will show when you release the click!');
})