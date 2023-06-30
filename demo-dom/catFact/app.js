const fact = document.querySelector('#fact');

fetch('https://catfact.ninja/fact')
.then((res) => {
    console.log('response ok!', res);
    return res.json();
})
.then((data) => {
    console.log(data);
    fact.innerHTML = data.fact;
})
.catch((err) => {
    console.log('There is an error: ', err);
})