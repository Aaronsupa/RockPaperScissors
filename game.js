function getComputerSelection(Choices){
    x = Math.floor(Math.random() * 3);
    return Choices[x];
}

function playRound(playerSelection, computerSelection){
    console.log(`${playerSelection} ${computerSelection}`)
    if (playerSelection == computerSelection){
        console.log("Tie!")
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            console.log("Player wins")
        }
        else {
            console.log("Computer wins")
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
                console.log("Player wins")
        }
        else {
            console.log("Computer wins")
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            console.log("Player wins")
        }
        else {
            console.log("Computer wins")
        }
    }
}

const Choices = ["rock", "paper", "scissors"]
let playerSelection = prompt("What's your choice? ");
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerSelection(Choices)
playRound(playerSelection,computerSelection)