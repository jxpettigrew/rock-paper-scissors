function getComputerChoice() {
    randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        return 'rock';
    } else if (randomInt === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    playerInput = prompt('Rock, paper, or scissors? Type your selection below:');
    return playerInput.trim().toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    console.log(`You played ${playerSelection}. Computer played ${computerSelection}.`);

    if (playerSelection === computerSelection) {
        return 'Its a tie!';
    }

    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    } else {
        if (computerSelection == 'rock') {
            return 'You lose!';
        } else {
            return 'You win!';
        }
    }
}

function playGame(roundNumber) {
    let playerScore = 0;
    let computerScore = 0;
    let tieNumber = 0;
    for (let i = 0; i < roundNumber; i++) {
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

    console.log(`Final score:\n Player: ${playerScore} \n Computer: ${computerScore} \n Ties: ${tieNumber}`);
}

let rounds = prompt('How many rounds do you want to play?');
playGame(rounds);