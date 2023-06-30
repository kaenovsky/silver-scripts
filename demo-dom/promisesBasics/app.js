const fakeRequest = (url) => {
    const rand = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('OK! Your fake data goes here');
            } else {
                reject('Error in request!');
            }
        }, 1000);
    })
}

fakeRequest('/dogs/1')
    .then(() => {
        console.log('DONE WITH REQUEST!');
    })
    .catch((err) => {
        console.log(err);
    })

async function makeTwoRequest() {

    try {
        let data1 = await fakeRequest('cats.com/api/demo');
        console.log(data1);
        let data2 = await fakeRequest('cats.com/api/demo2');
        console.log(data2);
    }
    catch (e) {
        console.log('There seems to be an error: ', e);
    }
}

// calling the function
makeTwoRequest();