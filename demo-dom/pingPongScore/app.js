// select score elements
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
let pointsP1 = 0;
let pointsP2 = 0;

// select buttons
const btn1 = document.querySelector('#player1');
const btn2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');
const playingTo = document.querySelector('#playingto');

// reset logic

function resetScore() {
    pointsP1 = 0;
    pointsP2 = 0;
    score1.innerHTML = pointsP1;
    score2.innerHTML = pointsP2;
    score1.style.color = 'unset';
    score2.style.color = 'unset';
}

// score logic

let maxScore = 5;

btn1.addEventListener('click', () => {
    if(pointsP1 < maxScore && pointsP2 < maxScore) {
        pointsP1 = pointsP1 + 1;
        score1.innerHTML = pointsP1;
    }

    if (pointsP1 == maxScore) {
        score1.style.color = 'green';
        score2.style.color = 'red';
    }
})

btn2.addEventListener('click', () => {
    if(pointsP1 < maxScore && pointsP2 < maxScore) {
        pointsP2 = pointsP2 + 1;
        score2.innerHTML = pointsP2;
    }

    if (pointsP2 == maxScore) {
        score2.style.color = 'red';
        score1.style.color = 'green';
    }
})

reset.addEventListener('click', () => {
    resetScore();    
})

playingTo.addEventListener('change', (e) => {
    maxScore = e.target.value;
    resetScore(); 
    console.log('max score is now ----> ' + maxScore);
})