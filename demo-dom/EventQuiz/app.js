// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#list')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newLi = document.createElement('li');
    newLi.innerHTML = qty.value + ' ' + product.value;
    list.appendChild(newLi);
    qty.value = '';
    product.value = '';
})


