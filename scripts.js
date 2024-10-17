const CHOICE_ROCK = 0;
const CHOICE_PAPER = 1;
const CHOICE_SCISSORS = 2;
const COMPUTER = 'computer';
const HUMAN = 'human';
const TIE = 'tie';

let humanScore = 0;
let computerScore = 0;
let narrator = 'Choose your element! First to five wins.';

const narratorDiv = document.querySelector('#narrator');
const scoreDiv = document.querySelector('#score');

function updateNarrator(text) {
    narratorDiv.textContent = text;
}

function updateScore(human, computer) {
    scoreDiv.textContent = `${human} - ${computer}`;
}

updateNarrator(narrator);
updateScore(humanScore, computerScore);

function getComputerChoice() {
    return Math.floor(Math.random() * 3); // 0 = Rock, 1 = Paper, 2 = Scissors
}

function getWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return TIE;
    } else if ((humanChoice - computerChoice + 3) % 3 === 1) {
        return HUMAN;
    } else {
        return COMPUTER;
    }
}

function checkForGameWinner() {
    if (computerScore === 5) {
        resetGame('The computer won the whole game...');
    } else if (humanScore === 5) {
        resetGame('The human won the whole game!!!');
    }
}

function resetGame(winnerMessage) {
    humanScore = 0;
    computerScore = 0;
    updateNarrator(winnerMessage);
    updateScore(humanScore, computerScore);
}

function advanceRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const roundWinner = getWinner(humanChoice, computerChoice);

    if (roundWinner === HUMAN) {
        humanScore++;
        updateNarrator('The human wins the round!');
    } else if (roundWinner === COMPUTER) {
        computerScore++;
        updateNarrator('The computer wins...');
    } else {
        updateNarrator('It\'s a tie!');
    }

    updateScore(humanScore, computerScore);
    checkForGameWinner();
}

const buttons = document.querySelectorAll('#buttons button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        switch(event.target.id) {
            case 'rock':
                advanceRound(CHOICE_ROCK);
                break;
            case 'paper':
                advanceRound(CHOICE_PAPER);
                break;
            case 'scissors':
                advanceRound(CHOICE_SCISSORS);
                break;
        }
    });
});
