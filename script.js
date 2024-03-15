//Declare an array 
let winners = [];
const choices = ["rock", "paper", "scissors"];

//Resets game 
function resetGame() {
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".computerChoice").textContent = "";
    document.querySelector(".reset").style.display = "none";
}

//Gets all the buttons from HTML and transfers appropriate value by id
function startGame() {
    let allBs = document.querySelectorAll("button");
    allBs.forEach((button) => 
    button.addEventListener("click", () => {
        if(button.id) {
            playRound(button.id);
        }
    }));
}
//Shows user's choice in Player section
function playRound(playerChoice) {
    let wins = checkWins();
    if(wins >= 5) {
        return;
    }

    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);
    totalWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
    if (wins == 5) {
    endGame();
    }
}

//Either side must win 5 times
function endGame() {
    let playerWins = winners.filter((item) => item == "Player").length;

    if(playerWins == 5) {
        document.querySelector(".winner").textContent = "You won 5 times";
    } else {
        document.querySelector(".winner").textContent = "Computer won 5 times";
    }
    //Shows 'Play Again' button
    document.querySelector(".reset").style.display = "flex";
}

//Shows either side's choice and displays the winner
function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector(".playerChoice").textContent = `You chose: ${
        playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    }`;
    document.querySelector(".computerChoice").textContent = `Computer chose: ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }`;
    displayRoundWinner(winner);

}

function displayRoundWinner(winner) {
    if (winner == "Player") {
        document.querySelector(".winner").textContent = "You won the round!";
    } else if (winner == "Computer") {
        document.querySelector(".winner").textContent = "Computer won the round!";
    } else {
        document.querySelector(".winner").textContent = "The round was a tie!";
    }
}
//Counts and displays either side's score after each game and ties also
function totalWins() {
    const playerWinCount = winners.filter((item) => item == "Player").length;
    const computerWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${playerWinCount}`;
    document.querySelector(".computerScore").textContent = `Score: ${computerWinCount}`;
    document.querySelector(".ties").textContent = `Ties: ${ties}`;
}
//Computer randomly picks choices
function computerSelect() {
    return choices[Math.floor(Math.random() * choices.length)];
}


//Checking for either side's win
function checkWins() {
    const playerWinCount = winners.filter((item) => item == "Player").length;
    const computerWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWinCount, computerWinCount);
}

function checkWinner(choice1, choice2) {
    if(
        (choice1 == "rock" && choice2 == "scissors") ||
        (choice1 == "scissors" && choice2 == "paper") ||
        (choice1 == "paper" && choice2 == "rock")
    ){
        return "Player";
    }else if(choice1 == choice2){
        return "Tie";
    }else{
        return "Computer";
    }
}

function whoIsWinner() {
    //Make a filter array for each case
    const playerWinCount = winners.filter((item) => item == "Player").length;
    const computerWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    
}
startGame();

