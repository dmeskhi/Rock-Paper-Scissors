//Declare an array and get random choice from the computer
const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

//Determine the winner
function whoIsWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock") 
    ){
        return "Player";
    }else{
        return "Computer";
    }
}
//Play the single round
function playRound(playerSelection, computerSelection){
    const result = whoIsWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a Tie!";
    }
    else if (result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

//Collecting and validating user input
function getPlayerInput(){
    let validateInput = false;
    while(validateInput == false){
        const choice = prompt("Rock, Paper, Scissors");
        if(choice == null){
            continue;
        }
        const choiceLower = choice.toLowerCase();
        if(choices.includes(choiceLower)){
            validateInput = true;
            return choiceLower;
        }
    }
}

//Play 5 rounds, determine the winner and display the score
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerInput();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(whoIsWinner(playerSelection, computerSelection) == "Player"){
            playerScore++;
        }
        else if(whoIsWinner(playerSelection, computerSelection) == "Computer"){
            computerScore++;
        }
    }
    if(playerScore > computerScore){
        console.log(`Player Won ${playerScore++} to ${computerScore++}`);
    }
    else if(playerScore < computerScore){
        console.log(`Computer Won ${computerScore++} to ${playerScore++}`);
    }
    else{
        console.log("It's a Tie!");
    }
}
game();
