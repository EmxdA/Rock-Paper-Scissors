const playBtn = document.querySelector(".playBtn");
const siteHeading = document.querySelector(".mainHeading");
const gameDiv = document.querySelector("#gameContainer");
const body = document.querySelector('body');
const desc = document.createElement("h3");

desc.textContent = "10 Rounds, 3 Moves, Don't Lose!"
desc.setAttribute('style', 'text-align: center; font-size: 28px; color: #BFC0C0')

playBtn.addEventListener('click', () => {
    playBtn.setAttribute('style', 'visibility: hidden;');
    siteHeading.setAttribute('style', 'font-size: 40px; margin:0; padding: 30px 0; background-color: #1f222e; transition: all .5s linear;');
    gameDiv.appendChild(desc);
})





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

// let game = () => {
//     let playerSelection, computerSelection;
//     for (let i = 0; i < 5; i++){
//         playerSelection = prompt("Enter Rock, Paper or Scissors");
//         computerSelection = getComputerChoice();
//         console.log(playGame(playerSelection, computerSelection));
//     }
//     if(playerScore > computerScore)
//     {
//         console.log("You Won!");
//     }
//     else {
//         console.log("you lost!");
//     }
// }


game();
