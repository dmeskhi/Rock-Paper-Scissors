//Declare an array and get random choice from the computer
const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for (let i = 0; i < 5; i++) {
    playRound(i);
    }
    whoIsWinner();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    //Player input 
    let input = prompt("Enter rock, paper, or scissors");
    //When input is empty pop-up menu stays until it gets input
    while(input == null) {
        input = prompt("Enter rock, paper, or scissors");
    } 
    //Make input text all lowercase
    input = input.toLowerCase();
    //Check if user input coincides with computer choices 
    let check = validateInput(input);

    while (check == false) {
        input = prompt(
            "Please, correct your spelling and enter rock, paper, scissors. Words are not case sensitive"
            );
            while(input == null) {
                input = prompt("Enter rock, paper, or scissors");
            } 
            input = input.toLowerCase();
            check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    if(choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

function checkWinner(choiceUser, choiceComputer) {
    if(choiceUser === choiceComputer) {
        return "Tie";
    }else if(
        (choiceUser === "rock" && choiceComputer === "scissors") ||
        (choiceUser === "paper" && choiceComputer === "rock") ||
        (choiceUser === "scissors" && choiceComputer === "paper")
    ){
        return "Player";
    }else{
        return "Computer";
    }
}

function whoIsWinner() {
    //Make a filter array for each case
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player wins: ", playerWins);
    console.log("Computer wins: ", computerWins);
    console.log("It's a tie: ", ties);
    //console.log(winners);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round: ", round);
    console.log("Player chose: ", playerChoice);
    console.log("Computer chose: ", computerChoice);
    console.log(winner, "won the round");
    console.log("---------------------------------");
}
game();

