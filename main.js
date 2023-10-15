const optionsValue = ['Rock', 'Paper', 'Scissors'];
let playerOption = null;
let computerOption = null;
let playerScore = 0;
let computerScore = 0;

const optionElements = document.getElementsByClassName('option');
const roundMessageElement = document.getElementById('round-message');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const roundInfoElement = document.getElementById('round-info');

for (let option of optionElements) {
    option.addEventListener('click', function(event) {
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