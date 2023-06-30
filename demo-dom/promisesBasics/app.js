const fakeRequest = (url) => {
    const rand = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Your fake data goes here');
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