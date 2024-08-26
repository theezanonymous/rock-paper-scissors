function getComputerChoice(){
    let ran = parseInt(Math.random()*3);
    return ran==0?"rock":ran==1?"paper":"scissors";
}

//Main code
let humanScore = 0; let computerScore = 0;
const scoreboard = document.querySelector("#scoreboard"); const title = document.querySelector("title");
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors")
rock.addEventListener("click", ()=>{humanChoice = "rock"; playRound("rock", getComputerChoice());})
paper.addEventListener("click", ()=>{humanChoice = "paper";playRound("paper", getComputerChoice());})
scissors.addEventListener("click", ()=>{humanChoice = "scissors";playRound("scissors", getComputerChoice());})

function playRound(humanChoice, computerChoice){
    updateButtons(humanChoice,computerChoice);
    if(humanChoice ===computerChoice){
        return;
    }
    else if ((humanChoice==="paper"&& computerChoice === "rock") ||(humanChoice ==="scissors" && computerChoice === "paper") || (humanChoice ==="rock" && computerChoice==="scissors")){
        humanScore++; title.innerText = "Player: +1";
    }
    else{
        computerScore++; title.innerText = "Computer: +1";
    }
    scoreboard.innerText = `Current Score: ${humanScore} - ${computerScore}`
    if(humanScore>5 || computerScore>5){
        scoreboard.innerText = (humanScore>computerScore? "You won the game!": computerScore===humanScore?"Tie game. GGs":"Computer won the game.");
    }
    

}
function updateButtons(a,b){
    const left = document.querySelector("#playerChoice");
    const right = document.querySelector("#computerChoice");
    left.innerText = emojize(a);
    right.innerText = emojize(b);
}
function emojize(a){
    if(a==="rock"){
        return "🪨";
    }
    if(a==="paper"){
        return "📄";
    }
    if(a==="scissors"){
        return "✂️";
    }
}