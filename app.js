
const playerScoreShow = document.querySelector('#playerScore');
const computerScoreShow = document.querySelector('#computerScore');
const scoreMsg = document.querySelector('.scoreMsg');
const gameInfo = document.querySelector('.gameInfo');
const space = document.querySelector('.space');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);

let counter = 0;
let gameOver = false;
let playerScore = 0;
let computerScore = 0;
playerScoreShow.innerText = playerScore;
computerScoreShow.innerText = computerScore;

function resetGame() {
    gameOver = false;
    playerScore = 0;
    computerScore = 0;
    playerScoreShow.innerText = playerScore;
    computerScoreShow.innerText = computerScore;
    scoreMsg.innerText = '';
    gameInfo.innerText = 'Press the button of your choice to play the game';
    this.style.display = 'none';
}    

function game(e) {
    
    let playerChoice = e.target.value;
    console.log('playerChoice :', e.target.value);
    let computerChoice = getComputerChoice();
    console.log('computer choice:', computerChoice);
    
    let result = playRound(playerChoice, computerChoice);
    // console.log('result:', result);

    playerScore += +result[1];
    computerScore += +result[2];
    // console.log('playerScore:', playerScore);
    // console.log('computerScore:', computerScore);
    scoreMsg.innerText = result[0];
    playerScoreShow.innerText = playerScore;
    computerScoreShow.innerText = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            gameInfo.innerText = 'You win this game!';
        } else if (playerScore < computerScore) {
            gameInfo.innerText = 'You lose this game!';
        } else if (playerScore === computerScore) {
            gameInfo.innerText = 'This game is a draw!';
        }
        space.innerHTML = '<button class="buttons" id="newGameBtn">New Game</button>';
        const newGame = document.querySelector('#newGameBtn');
        newGame.addEventListener('click', resetGame);
    }
        
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = [`This round is a tie! ${playerSelection} equals ${computerSelection}`,0 ,0];
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        result = ['You win this round! Rock beats Scissors', 1, 0];
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        result = ['You win this round! Paper beats Rock', 1, 0];
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        result = ['You win this round! Scissors beats Paper', 1, 0];
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
        result = ['You lose this round! Rock beats Scissors', 0, 1];
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
        result = ['You lose this round! Paper beats Rock', 0, 1];
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) {
        result = ['You lose this round! Scissors beats Paper', 0, 1];
    }

    return result;
}

function getComputerChoice() {
    const rpsArray = ['Rock', 'Paper', 'Scissors'];
    let rndIndex = Math.floor(Math.random() * rpsArray.length);
    let choice = rpsArray[rndIndex];
    return choice;
}