function getComputerChoice() {
    const intChoice = Math.floor(Math.random() * 3);

    if (intChoice == 0) {
        return "Rock"
    } else if (intChoice == 1) {
        return "Paper"
    } else if (intChoice == 2) {
        return "Scissors"
    }
}

console.log(getComputerChoice())