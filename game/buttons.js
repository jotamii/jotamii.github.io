function introScreenAppears() {
    var introScreen = document.querySelector('.introScreen');
    introScreen.style.display = 'block';
}

function endScreenAppears() {
    var endScreen = document.querySelector('.endScreen');
    endScreen.style.display = 'block';
}

function stopGame() {
    endScreenAppears();
    var endScore = document.querySelector('.endScore');
    var moveScore = (1 / moves) * 100;
    endScore.innerText = "Your total score: " + score + moveScore.toFixed();
    
}

function resetScoreAndLife() {
    moves = 0
    document.querySelector('.moves').innerHTML = 'Moves: ' + moves;
    score = 0
    document.querySelector('.score').innerHTML =  'Card score: ' + score;
}

introScreenAppears();

window.addEventListener('click', function (event) {

    if (event.target.classList.contains('button')) {
        var introScreen = document.querySelector('.introScreen');
        introScreen.style.display = 'none';
        
        resetScoreAndLife();
        play();
    }
})

window.addEventListener('click', function (event) {

    if (event.target.classList.contains('buttonend')) {
        var endScreen = document.querySelector('.endScreen');
        endScreen.style.display = 'none';
        
        resetScoreAndLife();
        play();
        location.reload();
    }
})

