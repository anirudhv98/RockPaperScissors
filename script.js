// function getComputerChoice()
// {
//     let choice = Math.floor(Math.random() * 3);
//     if(choice==0)
//     {
//         return "rock";
//     }
//     else if(choice == 1)
//     {
//         return "paper";
//     }
//     else
//     {
//         return "scissors";
//     }
// }

// function play(computer, player =  "rock")
// {
//     console.log(player);
//     console.log(computer);
//     if((computer == "rock" && player == "rock") || (computer == "scissors" && player == "scissors") || (computer == "paper" && player == "paper"))
//     {
//         alert("This round is a draw");
//         return 0;
//     }
//     else if ((player == "rock" && computer == "scissors") || 
//     (player == "scissors" && computer == "paper") || 
//     (player == "paper" &&  computer == "rock"))
//     {
//         alert(`You Won! ${player} beats ${computer}`);
//         return 1;
//     }
//     else 
//     {
//         alert(`You Lose! ${computer} beats ${player}`);
//         return -1;
//     }
// }

// let computerScore =0;
// let playerScore =0;

// for(let i=0;i<5;i++)
// {
//     let computer = getComputerChoice();
//     let player = prompt("Enter your choice").toLowerCase();
//     let result = play(computer,player);
//     if(result==1)
//     {
//         playerScore+=1;
//     }
//     else if(result == -1)
//     {
//         computerScore +=1;
//     }
// }


// if(computerScore>playerScore)
// {
//     alert(`Computer won the series ${computerScore} - ${playerScore}`);
// }
// else if(playerScore>computerScore)
// {
//     alert(`Player won the series ${playerScore} - ${computerScore}`);
// }
// else 
// {
//     alert("Series is a draw");
// }