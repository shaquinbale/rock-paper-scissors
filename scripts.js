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
        console.log("Invalid choice, try again");
        return getHumanChoice
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie!");
    } else if ((humanChoice - computerChoice + 3) % 3 === 1) {
        humanScore++
        console.log("Human Wins!");
    } else {
        computerScore++
        console.log("Computer Wins!")
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {

        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Round ${i + 1}`)
    }
    console.log(`Final Score: ${humanScore} to ${computerScore}`)

    if (humanScore === computerScore) {
        console.log("It's a tie!");
    } else if (humanScore > computerScore) {
        console.log("The humans are victorious!");
    } else {
        console.log("The computers have taken over...");
    }
}

playGame();