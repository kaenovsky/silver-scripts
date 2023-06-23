window.addEventListener('keydown', (e) => {
    // ~~~ Key object ~~~
    // console.log(e);
    // ~~~ Key code ~~~
    // console.log(e.code)
})

// use only certain keys

window.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'ArrowUp':
            console.log('UP :) ');
            break;
        case 'ArrowDown':
            console.log('DOWN :( ');
            break;
        case 'ArrowLeft':
            console.log('## LEFT');
            break;
        case 'ArrowRight':
            console.log('RIGHT ##');
            break;
        default:
            console.log('Lets ignore this key!');
            break;
    }
})