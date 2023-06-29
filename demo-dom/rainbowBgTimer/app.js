const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const colors = ['darkred', 'darkorange', 'gold', 'forestgreen', 'dodgerblue', 'indigo', 'violet'];

let i = 0;

const printColor = function() {
    console.log('current color is ' + colors[i]);
    h1.innerHTML = 'Oh look, there is color now';
    body.style.backgroundColor = colors[i];
    p.innerText = 'this color is called ' + colors[i];
    i++;
}

const id = setInterval(() => {
    console.log('this message is going to repeat a few times');
    printColor();
    h1.classList.add('shadow');
    p.classList.add('shadow');
    if (i === 7) {
        p.innerText = 'The last color is called ' + colors[i - 1];
        console.log('now the interval will end');        
        clearInterval(id);
    }
}, 2000);