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


function playRound(playerSelection, computerSelection) {
    let gameUpdate = document.querySelector('.game-text');

    if (playerSelection === computerSelection) {
        gameUpdate.innerText = 'Its a tie!';
        return;
    }

    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        gameUpdate.innerText = 'Computer wins!';
    } else {
        gameUpdate.innerText = 'You win!';
    }
}


function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let tieNumber = 0;
    let gameOver = false;
    let rounds = 1

    const buttonList = document.querySelectorAll('button');
    for (let btn of buttonList) {
        btn.addEventListener('click', playerChoice);
        btn.addEventListener('click', getComputerChoice);
        btn.addEventListener('click', function () {
            playRound(document.querySelector('.player-space .choice').innerText,
                document.querySelector('.computer-space .choice').innerText);
        });
        btn.addEventListener('click', function () { handleGameLogic() });
        btn.addEventListener('click', () => rounds++);
    }

    /*for (let i = 0; i < roundNumber; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice)
        
        console.log(result);
        if (result == 'You win!') {
            playerScore++;
        } else if (result == "You lose!") {
            computerScore++;
        } else {
            tieNumber++;
        }
        console.log(`Player: ${playerScore} \n Computer: ${computerScore} \n Ties: ${tieNumber}`);
    }
    
    console.log(`Final score:\n Player: ${playerScore} \n Computer: ${computerScore} \n Ties: ${tieNumber}`);*/
}

const handleGameLogic = function () {
    let gameUpdate = document.querySelector('.game-text');
    let playerScore = document.querySelector('.player-space span');
    let computerScore = document.querySelector('.computer-space span');
    console.log(playerScore, computerScore);
    console.log(gameUpdate.innerText);
    if (gameUpdate.innerText === 'You win!') {
        let newScore = parseInt(playerScore.innerText) + 1;
        playerScore.innerText = newScore.toString();
    } else if (gameUpdate.innerText === 'Computer wins!') {
        let newScore = parseInt(computerScore.innerText) + 1;
        computerScore.innerText = newScore.toString();
    }
}



const button = document.querySelector('.start-button');
const controls = document.querySelector('.controls');
button.addEventListener('click', function () {
    button.style.display = "none";
    controls.style.display = "inline";
    playGame();
});
