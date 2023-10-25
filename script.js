let player = 0;
let computer = 0;

function getComputerChoice()
{
    let array = ["rock","paper","scissor"];
    let random = Math.floor((Math.random() * 3));
    return array[random];
}

function playRound(playerSelection , computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    if((playerSelection=="rock" && computerSelection=="scissor")
    || (playerSelection=="paper" && computerSelection=="rock") 
    || (playerSelection=="scissor" && computerSelection=="paper"))
    {
        console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
        player++;
    }
    else if(playerSelection==computerSelection)
    {
        console.log(`Scores tied, both chose ${playerSelection}`);
    }
    else 
    {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computer++;
    }
}

function game()
{
    for(let i=0;i<5;i++)
    {
        const playerSelection = prompt("Enter your selection : ");
        const computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection);
    }
}


game();
if(player>computer)
{
    console.log(`Player won the series. Player has ${player} points and Computer has ${computer} points`);
}
else  if(computer>player)
{
    console.log(`Computer won the series. Computer has ${computer} points and Player has ${player} points`);
}
else 
{
    console.log(`Scores are tied. Player and Computer both have ${player} points`);
}