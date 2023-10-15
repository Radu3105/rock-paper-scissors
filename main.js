const optionsValue = ['Rock', 'Paper', 'Scissors'];
let playerOption = null;
let computerOption = null;
let playerScore = 0;
let computerScore = 0;
let winner = null;
let isGameOver = false;

const appElement = document.getElementById('app');
const optionElements = document.getElementsByClassName('option');
const roundMessageElement = document.getElementById('round-message');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const roundInfoElement = document.getElementById('round-info');
const gameoverSectionElement = document.getElementById('gameover');
const playAgainBtnElement = document.getElementById('play-again-btn');

playAgainBtnElement.addEventListener('click', function(event) {
    resetGame();
});

for (let option of optionElements) {
    option.addEventListener('click', function(event) {
        if (isGameOver) {
            return;
        }
        if (this.id === 'option-rock') {
            playerOption = optionsValue[0];
        }
        else if (this.id === 'option-paper') {
            playerOption = optionsValue[1];
        }
        else {
            playerOption = optionsValue[2];
        }
        computerOption = optionsValue[Math.floor(Math.random() * 3)];
        winner = manageRoundWinner(playerOption, computerOption);
        if (winner === 'Player') {
            playerScore++;
            message = 'You win the round!';
        }
        else if (winner === 'Computer') {
            computerScore++;
            message = 'Computer wins the round!';
        }
        else {
            message = "It's a Tie!";
        }
        playerScoreElement.innerHTML = playerScore;
        computerScoreElement.innerHTML = computerScore;
        roundInfoElement.innerHTML = `You chose ${playerOption.toUpperCase()}. Computer chose ${computerOption.toUpperCase()}. ` + message;
        manageGameWinner();
    });
}

function manageRoundWinner(playerOption, computerOption) {
    if (playerOption === computerOption) {
        return 'Tie';
    }
    if (
        (playerOption === 'Rock' && computerOption === 'Scissors') ||
        (playerOption === 'Scissors' && computerOption === 'Paper') ||
        (playerOption === 'Paper' && computerOption === 'Rock')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function manageGameWinner() {
    if (playerScore === 5 || computerScore === 5) {
        isGameOver = true;
        appElement.classList.add('blur-background');
        gameoverSectionElement.style.visibility = 'visible';
        gameoverSectionElement.children[0].innerHTML = (winner == 'Player') ? 'YOU WON!' : 'YOU LOST!';
    }
}

function resetGame() {
    isGameOver = false;
    appElement.classList.remove('blur-background');
    gameoverSectionElement.style.visibility = 'hidden';
    playerOption = null;
    computerOption = null;
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.innerHTML = playerScore;
    computerScoreElement.innerHTML = computerScore;
    roundInfoElement.innerHTML = '';
}