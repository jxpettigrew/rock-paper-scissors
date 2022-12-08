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

player = getPlayerChoice();
comp = getComputerChoice();

console.log(playRound(player, comp));