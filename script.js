function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
} else {
    return "scissors";
}
}

let scoreboard = document.querySelector(".scoreboard");
let roundResult = document.querySelector(".outer");
let inner = document.querySelector(".inner");
function play(computer, player) {
  console.log(player);
  console.log(computer);
  if (
    (computer == "rock" && player == "rock") ||
    (computer == "scissors" && player == "scissors") ||
    (computer == "paper" && player == "paper")
  ) {
    roundResult.textContent = "This round is a draw";
    return 0;
  } else if (
    (player == "rock" && computer == "scissors") ||
    (player == "scissors" && computer == "paper") ||
    (player == "paper" && computer == "rock")
  ) {
    roundResult.textContent = `You Won! ${player} beats ${computer}`;
    return 1;
  } else {
    roundResult.textContent = `You Lose! ${computer} beats ${player}`;
    return -1;
  }
}

let playAgain = document.querySelector("#reset");
playAgain.addEventListener("click", reset);
let played = false;

function reset() {
  computerScore = 0;
  playerScore = 0;
  scoreboard.textContent = `Player ${playerScore} : Computer ${computerScore}`;
  played = false;
  playAgain.style.visibility = played ? "visible" : "hidden";
  roundResult.textContent = "";
  inner.textContent="";
}

function round(player) {
  if (!played) {
    let computer = getComputerChoice();
    let result = play(computer, player);
    if (result == 1) {
      playerScore += 1;
    } else if (result == -1) {
      computerScore += 1;
    }
    scoreboard.textContent = `Player ${playerScore} : Computer ${computerScore}`;
  }
  if (playerScore == 5 || computerScore == 5) {
    played = true;
    if (computerScore > playerScore) {
      roundResult.textContent = `Computer won the series ${computerScore} - ${playerScore}`;
    } else if (playerScore > computerScore) {
      roundResult.textContent = `Player won the series ${playerScore} - ${computerScore}`;
    } else {
      roundResult.textContent = "Series is a draw";
    }
    inner.textContent = "Click on the Button below to play again";
    playAgain.style.visibility = played ? "visible" : "hidden";
  }
}

let computerScore = 0;
let playerScore = 0;
let buttons = document.querySelectorAll(".choice");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    round(button.value);
  });
});
