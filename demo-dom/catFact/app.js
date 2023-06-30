const fact = document.querySelector('#fact');

// fetch('https://catfact.ninja/fact')
// .then((res) => {
//     console.log('response ok!', res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
//     fact.innerHTML = data.fact;
// })
// .catch((err) => {
//     console.log('There is an error: ', err);
// })

// refactor with async()

const getCatFact = async () => {
    try {
        const res = await fetch('https://catfact.ninja/fact');
        const data = await res.json();
        console.log(data);
        fact.innerHTML = data.fact;
    } catch (error) {
        console.log('Error! --> ', error);        
    }
}

getCatFact();