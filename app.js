
game();

function game() {
    let counter = 1;
    let gameOver = false;
    let playerChoice;
    let playerScore = 0;
    let computerScore = 0;
    while (!gameOver) {
        playerChoice = prompt('Please enter your choice of the following options:"Rock", "Paper", "Scissors');
        let computerChoice = getComputerChoice();
        console.log('computer choice:', computerChoice);
        
        let result = playRound(playerChoice, computerChoice);
        console.log(result);

        playerScore += +result[1];
        computerScore += +result[2];
        console.log('playerScore:', playerScore);
        console.log('computerScore:', computerScore);
        
        counter++;
        if (counter === 6) {
            gameOver = true;
            if (playerScore > computerScore) {
                console.log(`You win! Your score: ${playerScore} - computer's score: ${computerScore}`);
            } else if (playerScore < computerScore) {
                console.log(`You lose! Your score: ${playerScore} - computer's score: ${computerScore}`);
            } else if (playerScore === computerScore) {
                console.log(`It's a draw! Your score: ${playerScore} - computer's score: ${computerScore}`);
            }
        }
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    if (playerSelection === computerSelection) {
        result = [`It's a tie! ${playerSelection} equals ${computerSelection}`,0 ,0];
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        result = ['You win! Rock beats Scissors', 1, 0];
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        result = ['You win! Paper beats Rock', 1, 0];
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        result = ['You win! Scissors beats Paper', 1, 0];
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
        result = ['You lose! Rock beats Scissors', 0, 1];
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        result = ['You lose! Paper beats Rock', 0, 1];
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
        result = ['You lose! Scissors beats Paper', 0, 1];
    }

    return result;
}

function getComputerChoice() {
    const rpsArray = ['rock', 'paper', 'scissors'];
    let rndIndex = Math.floor(Math.random() * rpsArray.length);
    // console.log('index:', rndIndex);
    let choice = rpsArray[rndIndex];
    return choice;
}