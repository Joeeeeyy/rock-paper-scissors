let playerScore = 0;
let computerScore = 0;
let choice = ["rock", "paper", "scissors"];

let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');
let comment = document.getElementById('comment');
let player = document.getElementById('player');
let computer = document.getElementById('computer');
let reset = document.getElementById('reset');

reset.addEventListener('click', resetGame);
rockButton.addEventListener('click', playRock);
paperButton.addEventListener('click', playPaper);
scissorsButton.addEventListener('click', playScissors);

function playRock() {
   let computerChoice = choice[Math.floor(Math.random() * choice.length)];

   if (computerChoice == 'rock') {
      comment.textContent = "It's a tie!"
   } else if (computerChoice == 'paper') {
      comment.textContent = "Paper beats Rock. You loose!"
      computerScore++;
   } else {
      comment.textContent = "Rock beats Scissors. You win!"
      playerScore++;
   }
   player.textContent = "You: " + playerScore;
   computer.textContent = "Computer: " + computerScore;
   if (playerScore == 5 || computerScore == 5) {
      stopGame();
   }
}

function playPaper() {
   let computerChoice = choice[Math.floor(Math.random() * choice.length)];

   if (computerChoice == 'paper') {
      comment.textContent = "It's a tie!"
   } else if (computerChoice == 'rock') {
      comment.textContent = "Paper beats Rock. You win!"
      playerScore++;
   } else {
      comment.textContent = "Scissors beats Paper. You loose!"
      computerScore++;
   }
   player.textContent = "You: " + playerScore;
   computer.textContent = "Computer: " + computerScore;
   if (playerScore == 5 || computerScore == 5) {
      stopGame();
   }
}

function playScissors() {
   let computerChoice = choice[Math.floor(Math.random() * choice.length)];

   if (computerChoice == 'scissors') {
      comment.textContent = "It's a tie!"
   } else if (computerChoice == 'rock') {
      comment.textContent = "Rock beats Scissors. You loose!"
      computerScore++;
   } else {
      comment.textContent = "Scissors beats Paper. You win!"
      playerScore++;
   }
   player.textContent = "You: " + playerScore;
   computer.textContent = "Computer: " + computerScore;
   if (playerScore == 5 || computerScore == 5) {
      stopGame();
   }
}

function stopGame() {
   if (computerScore > playerScore) {
      comment.textContent = "You Lose!";
   } else {
      comment.textContent = "You Win!";
   }
   playerScore = 0;
   computerScore = 0;
   player.textContent = "";
   computer.textContent = "";
   rockButton.removeEventListener('click', playRock);
   paperButton.removeEventListener('click', playPaper);
   scissorsButton.removeEventListener('click', playScissors);
   reset.className = ('');
   reset.id = ('reset');
}

function resetGame() {
   playerScore = 0;
   computerScore = 0;
   player.textContent = "";
   computer.textContent = "";
   comment.textContent = "";
   rockButton.removeEventListener('click', playRock);
   paperButton.removeEventListener('click', playPaper);
   scissorsButton.removeEventListener('click', playScissors);
   reset.className = ('');
   reset.id = ('reset');
}