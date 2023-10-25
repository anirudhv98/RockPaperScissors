function getComputerChoice()
{
    var array = ["rock","paper","scissor"];
    var random = Math.floor((Math.random() * 3));
    return array[random];
}

function playRound(playerSelection , computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    if((playerSelection=="rock" && computerSelection=="scissor")
    || (playerSelection=="paper" && computerSelection=="rock") 
    || (playerSelection=="scissor" && computerSelection=="paper"))
    {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    else if(playerSelection==computerSelection)
    {
        return `Scores tied, both chose ${playerSelection}`;
    }
    else 
    {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
