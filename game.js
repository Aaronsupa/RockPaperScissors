function getComputerSelection(Choices){
    x = Math.floor(Math.random() * 3);
    return Choices[x];
}

function playRound(playerSelection, computerSelection){
    console.log(`${playerSelection} ${computerSelection}`)
}


const Choices = ["rock", "paper", "scissors"]
let playerSelection = prompt("What's your choice? ");
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerSelection(Choices)
playRound(playerSelection,computerSelection)