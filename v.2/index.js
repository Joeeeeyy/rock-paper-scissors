// const computerChoiceDisplay = document.getElementById('computer-choice')
// const userChoiceDisplay = document.getElementById('user-choice')
// const resultDisplay = document.getElementById('result')
// const possibleChoices = document.querySelectorAll('button')
// let userChoice
// let computerChoice
// let result

// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
//   userChoice = e.target.id
//   userChoiceDisplay.innerHTML = userChoice
//   generateComputerChoice()
//   getResult()
// }))

// function generateComputerChoice() {
//   const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
//   if (randomNumber === 1) {
//     computerChoice = 'rock'
//   }
//   if (randomNumber === 2) {
//     computerChoice = 'scissors'
//   }
//   if (randomNumber === 3) {
//     computerChoice = 'paper'
//   }
//   computerChoiceDisplay.innerHTML = computerChoice
// }

// function getResult() {
//   if (computerChoice === userChoice) {
//     result = 'its a draw!'
//   }
//   if (computerChoice === 'rock' && userChoice === "paper") {
//     result = 'you win!'
//   }
//   if (computerChoice === 'rock' && userChoice === "scissors") {
//     result = 'you lost!'
//   }
//   if (computerChoice === 'paper' && userChoice === "scissors") {
//     result = 'you win!'
//   }
//   if (computerChoice === 'paper' && userChoice === "rock") {
//     result = 'you lose!'
//   }
//   if (computerChoice === 'scissors' && userChoice === "rock") {
//     result = 'you win!'
//   }
//   if (computerChoice === 'scissors' && userChoice === "paper") {
//     result = 'you lose!'
//   }
//   resultDisplay.innerHTML = result
// }









const userChoiceDisplay = document.createElement('h1')
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice

const handleClick = (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
  generateComputerChoice()
  getResult()
}

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice
  computerChoiceDisplay.innerHTML = 'Computer choice: ' + computerChoice
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button')
  button.id = choices[i] // you can delete this id you want to use e.target.HTML in the handleClick
  button.innerHTML = choices[i]
  button.addEventListener('click', handleClick)
  gameGrid.appendChild(button)
}

const getResult = () => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = "YOU WIN!"
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = "YOU LOSE!"
      break
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
    resultDisplay.innerHTML = "ITS A DRAW!"
    break
  }
}