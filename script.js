const playBtn = document.querySelector(".playBtn");
const siteHeading = document.querySelector(".mainHeading");
const descDiv = document.querySelector(".descMenu");
const optionMenu = document.querySelector(".optionMenu");
const scoreMenu = document.querySelector(".scoreMenu");
const popup = document.querySelector(".popup");
const result = document.querySelector(".gameResult");
const playAgainBtn = document.querySelector(".playAgainBtn");

const body = document.querySelector("body");
const desc = document.createElement("h3");

const rockImg = document.createElement("img");
const paperImg = document.createElement("img");
const scissorsImg = document.createElement("img");

const eventBoard = document.createElement("h3");
const scoreBoard = document.createElement("h3");
scoreBoard.classList.add("score");

eventBoard.textContent = "Game Started! Pick Your option";
scoreBoard.textContent = "0 - 0";

eventBoard.setAttribute(
  "style",
  "text-align: center; font-size: 38px; color: #ef8354; margin-top: 30px"
);

scoreBoard.setAttribute(
  "style",
  "text-align: center; font-size: 48px; color: #BFC0C0; margin-top: 50px"
);

rockImg.src = "img/rock.png";
paperImg.src = "img/file.png";
scissorsImg.src = "img/scissors.png";

desc.textContent = "5 Rounds, 3 Moves, Don't Lose!";
desc.setAttribute(
  "style",
  "text-align: center; font-size: 28px; color: #BFC0C0"
);

playBtn.addEventListener("click", () => {
  playBtn.setAttribute("style", "visibility: hidden;");
  siteHeading.setAttribute(
    "style",
    "font-size: 58px; margin:0; padding: 30px 0; background-color: #1f222e; transition: all .5s linear;"
  );
  descDiv.appendChild(desc);
  optionMenu.appendChild(rockImg);
  optionMenu.appendChild(paperImg);
  optionMenu.appendChild(scissorsImg);
  scoreMenu.appendChild(scoreBoard);
  scoreMenu.appendChild(eventBoard);
});

const choicesArray = ["rock", "paper", "scissors"];

let playerScore = 0,
  computerScore = 0;

let getComputerChoice = () => {
  let random = Math.floor(Math.random() * 3);
  return choicesArray[random];
};

rockImg.addEventListener("click", () => game("rock", getComputerChoice()));

paperImg.addEventListener("click", () => game("paper", getComputerChoice()));

scissorsImg.addEventListener("click", () => game("scissors", getComputerChoice()));

playAgainBtn.addEventListener("click", () => {
  popup.setAttribute("style", "visibility: hidden;");
  eventBoard.textContent = "Let's go again! Pick an option";
  scoreBoard.textContent = "0 - 0";
})

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    eventBoard.textContent = "Draw || Both players played the same move!";
  } else {
    if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper")
    ) {
      playerScore++;
      eventBoard.textContent =
        "Your " + playerSelection + " beats the computers " + computerSelection;
    } else {
      computerScore++;
      eventBoard.textContent =
        "Your " +
        playerSelection +
        " lost to the computers " +
        computerSelection;
    }
    scoreBoard.textContent = playerScore + " - " + computerScore;
  }
};

let game = (playerSelection, computerSelection) => {
  playRound(playerSelection, computerSelection);
  if (playerScore + computerScore == 5) {
    if (playerScore > computerScore) {
      eventBoard.textContent = "You Win! Game has restarted!";
      result.textContent = "You Won!";
    } else {
      eventBoard.textContent = "You Lost! Game has restarted!";
      result.textContent = "You Lost!";
    }
    popup.setAttribute("style", "visibility: unset;")
    playerScore = 0;
    computerScore = 0;
  }
};
