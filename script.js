function getComputerChoice () {
   let choices = ["rock", "paper", "scissors"];
   let choice = choices[Math.floor(Math.random()*choices.length)];
   return choice;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
        return playerSelection + " beats " + computerSelection + "\nYay! You win!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "rock" && computerSelection == "paper") {
        return computerSelection + " beats " + playerSelection + "\nBoo! You loose!";
    }
    else {
        return "Tis a draw!";
    }
}
    let playerSelection = prompt();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
