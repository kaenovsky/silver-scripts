const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valueOfInput = input.value;
    const newValue = document.createElement('li');
    newValue.innerText = valueOfInput;
    list.append(newValue);
})