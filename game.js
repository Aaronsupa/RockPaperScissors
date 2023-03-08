const container = document.querySelector('#container');

const b1 = document.createElement('button');
b1.textContent = "rock";
b1.classList.add('b1');
const b2 = document.createElement('button');
b2.textContent = "paper";
b2.classList.add('b2');
const b3 = document.createElement('button');
b3.textContent = "scissors";
b3.classList.add('b3');
let pwin = 0;
let cwin = 0;
let para = document.createElement('para');
para.classList.add('para');
para.textContent = `${pwin}, ${cwin}`;


container.appendChild(b1);
container.appendChild(b2);
container.appendChild(b3);
container.appendChild(para);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () =>{
        const computerSelection = getComputerSelection(Choices);
        const playerSelection = button.textContent;
        let res = playRound(playerSelection,computerSelection);
        if (res[0] == 1){
            pwin += 1;
        }
        if (res[1] == 1){
            cwin += 1;
        }
        para.textContent = `${pwin}, ${cwin}`;
        if (pwin == 5){
            para.textContent = `Player Wins!`;
            button.removeEventListener('click')
        }
        if (cwin == 5){
            para.textContent = `Computer Wins!`;
            button.removeEventListener('click')
        }

    });
});



const Choices = ["rock", "paper", "scissors"];

function getComputerSelection(Choices){
    x = Math.floor(Math.random() * 3);
    return Choices[x];
}

function playRound(playerSelection, computerSelection){
    console.log(`${playerSelection} ${computerSelection}`)
    let pwin = 0;
    let cwin = 0;
    if (playerSelection == computerSelection){
        console.log("Tie!")
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            console.log("Player wins")
            pwin += 1; 
        }
        else {
            console.log("Computer wins")
            cwin += 1;
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            console.log("Player wins")
            pwin += 1; 
        }
        else {
            console.log("Computer wins")
            cwin += 1; 
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            console.log("Player wins")
            pwin += 1; 
        }
        else {
            console.log("Computer wins")
            cwin += 1;
        }
    }
    return [cwin, pwin];
}

/*function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("What's your choice? ");
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = getComputerSelection(Choices);
        playRound(playerSelection, computerSelection);
    }
}*/

/*let playerSelection = prompt("What's your choice? "); 
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerSelection(Choices);
playRound(playerSelection,computerSelection);
game()*/