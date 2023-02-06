
let computerScores = 0;
let playerScores = 0;
const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice;
}
//console.log(computerPlay());
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'you both pick rock'
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'you both pick paper'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {

        return 'you both pick Scissors'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScores++
        return 'you win! scissors beats paper'

    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScores++
        return 'you lost! Rock beats Scissors'

    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScores++
        return 'you lost! paper beats rock'

    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScores++
        return 'you win! Rock beats Scissors'

    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScores++
        return 'you lost! scissors beats paper'

    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScores++
        return 'you win! paper beats rock'

    }

}

//console.log(playRound(playerSelection, computerSelection));


const game = () => {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay()
        const playerSelection = prompt("Enter Rock paper scissors").toLowerCase()
        const result = playRound(playerSelection, computerSelection)
        console.log(result)

    }
    if (computerScores > playerScores) {
        return 'computer Won!!  try again ֎'
    }
    else if (playerScores > computerScores) {
        return 'you won you are a legend!!'

    }
}

console.log(game())