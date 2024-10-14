let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return Math.floor(Math.random() * 3); // 0 = Rock, 1 = Paper, 2 = Scissors
}

function getHumanChoice() {
    const choice = prompt("Human! Choose!").toLowerCase();

    if (choice == "rock"){
        return 0
    } else if (choice == "paper") {
        return 1
    } else if (choice == "scissors") {
        return 2
    } else {
        return 404
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "Tie!"
    } else if ((humanChoice - computerChoice + 3) % 3 === 1) {
        humanScore++
        return "Human Wins!"
    } else {
        computerScore++
        return "Computer Wins!"
    }
}