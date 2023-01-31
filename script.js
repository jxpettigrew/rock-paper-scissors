function getComputerChoice() {
    randomInt = Math.floor(Math.random() * 3);
    const computerText = document.querySelector('.computer-space .choice');
    switch (randomInt) {
        case 0:
            computerText.innerText = 'rock';
            break;
        case 1:
            computerText.innerText = 'paper';
            break;
        case 2:
            computerText.innerText = 'scissors';
            break;
    }
}

const playerChoice = function () {
    const choice = this.innerHTML.toLowerCase();
    const playerText = document.querySelector('.player-space .choice');
    playerText.innerText = choice;
}

const checkScore = function () {
    let gameUpdate = document.querySelector('.game-text');
    let playerScore = Number(document.querySelector('.player-space span').innerText);
    let computerScore = Number(document.querySelector('.computer-space span').innerText);

    if (playerScore === 5 || computerScore === 5) {
        gameUpdate.innerText = `Game over! ${playerScore > computerScore ? 'Player' : 'Computer'} wins!`;
        document.querySelector('.new-game-button').style.display = 'inline';
        document.querySelector('.controls').style.display = 'none';
        document.querySelector('.new-game-button').addEventListener('click', function () { document.location.reload(true) });
    }
}


function playRound(playerSelection, computerSelection) {
    let gameUpdate = document.querySelector('.game-text');
    let playerScore = document.querySelector('.player-space span');
    let computerScore = document.querySelector('.computer-space span');

    if (playerSelection === computerSelection) {
        gameUpdate.innerText = 'Its a tie!';
        return;
    }
    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        gameUpdate.innerText = 'Computer wins!';
        let newScore = parseInt(computerScore.innerText) + 1;
        computerScore.innerText = newScore.toString();
    } else {
        gameUpdate.innerText = 'You win!';
        let newScore = parseInt(playerScore.innerText) + 1;
        playerScore.innerText = newScore.toString();
    }
    checkScore();

}

const resetGame = function () {
    document.querySelector('.game-text').innerText = '';
    document.querySelector('.player-space span').innerText = '0';
    document.querySelector('.computer-space span').innerText = '0';
    document.querySelector('.player-space .choice').innerText = '';
    document.querySelector('.computer-space .choice').innerText = '';
}

function playGame() {
    const buttonList = document.querySelectorAll('.controls button');
    for (let btn of buttonList) {
        btn.addEventListener('click', playerChoice);
        btn.addEventListener('click', getComputerChoice);
        btn.addEventListener('click', function () {
            playRound(document.querySelector('.player-space .choice').innerText,
                document.querySelector('.computer-space .choice').innerText);
        });
    }
}

const button = document.querySelector('.start-button');
const controls = document.querySelector('.controls');
button.addEventListener('click', function () {
    button.style.display = "none";
    controls.style.display = "inline";
    resetGame();
    playGame();
});
