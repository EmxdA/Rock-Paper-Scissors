const choicesArray = ["rock", "paper", "scissors"];
let playerScore = 0, computerScore = 0;

let getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    return choicesArray[random];
}

let playGame = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    let string = null;
    if (playerSelection == computerSelection)
    {
        string = "Draw || Both players played the same move!";
        return string;
    }
    else 
    {
        if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
            playerScore ++;
            string = "Your " + playerSelection + " beats the computers " + computerSelection+ "! Score " + playerScore + "--" + computerScore;
            return string;
        }
        else {
            computerScore++;
            string = "Your " + playerSelection + " lost to the computers " + computerSelection+ "! Score " + playerScore + "--" + computerScore;
            return string;
        }
    }
}

let game = () => {
    let playerSelection, computerSelection;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Enter Rock, Paper or Scissors");
        computerSelection = getComputerChoice();
        console.log(playGame(playerSelection, computerSelection));
    }
    if(playerScore > computerScore)
    {
        console.log("You Won!");
    }
    else {
        console.log("you lost!");
    }
}


game();
