const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
	userChoice = e.target.id
	userChoiceDisplay.innerHTML = userChoice
	generateComputerChoice()
	getResult()
}))

function generateComputerChoice(){
	const randomNumber = Math.floor(Math.random()) * 3 + 1// or you can use possibleChoices.length
	switch (randomNumber){
		case (1):
			computerChoice = 'rock'
			break
		
		case (2):
			computerChoice = 'paper'
			break
			
		case (3):
			computerChoice = 'scissors'
			break
	}
	computerChoiceDisplay.innerHTML = computerChoice
	return computerChoice
	
}

function getResult(){
	if(computerChoice === userChoice){
		result = "It's a draw!"
	}
	if(computerChoice === 'rock' && userChoice === 'paper'){
		result = 'You win!'
	}
	if(computerChoice === 'rock' && userChoice === 'scissors'){
		result = 'You lost!'
	}
	if(computerChoice === 'paper' && userChoice === 'scissors'){
		result = 'You win!'
	}
	if(computerChoice === 'paper' && userChoice === 'rock'){
		result = 'You lost!'
	}
	if(computerChoice === 'scissors' && userChoice === 'rock'){
		result = 'You win!'
	}
	if(computerChoice === 'scissors' && userChoice === 'paper'){
		result = 'You lost!'
	}
	resultDisplay.innerHTML = result
}