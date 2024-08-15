function getComputerChoice(){
    let ran = parseInt(Math.random()*3);
    return ran==0?"rock":ran==1?"paper":"scissors";
}
function getHumanChoice(){
    return prompt("Enter your choice: ")
}
let humanScore = 0; let computerScore = 0;

for(let i = 0; i < 5; i++){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    let x = playRound(humanChoice, computerChoice);
    alert(`Current score: ${humanScore} - ${computerScore}`);

}
alert(humanScore>computerScore? "You won the game!": computerScore===humanScore?"Tie game. GGs":"Computer won the game.");
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.trim().toLowerCase();
    let match = "Computer chose " + computerChoice;
    alert(match);
    if(humanChoice ===computerChoice){
        return "You tied. Coninue."
    }
    if ((humanChoice==="paper"&& computerChoice === "rock") ||(humanChoice ==="scissors" && computerChoice === "paper") || (humanChoice ==="rock" && computerChoice==="scissors")){
        humanScore++;
        return("You win.");
    }
    else{
        computerScore++;
        return("You lose.");
    }

}