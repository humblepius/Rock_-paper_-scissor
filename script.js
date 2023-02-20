let computerScores = 0;
let playerScores = 0;
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const container = document.querySelector('.container')

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice;
}
let playRound = (playerSelection, computerSelection) => {
    const outcomeDiv = document.createElement('div')
    outcomeDiv.classList.add('outcome')
    container.append(outcomeDiv)

    if (playerSelection === computerSelection) {
        const p = document.createElement('p')
        p.innerText = 'you both pick the same'
        outcomeDiv.appendChild(p)

    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        playerScores++
        const p = document.createElement('p')
        p.innerText = 'you lost! rock beats scissors'
        outcomeDiv.appendChild(p)
    }

    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        computerScores++
        const p = document.createElement('p')
        p.innerText = 'you win! scissors beats paper'
        outcomeDiv.appendChild(p)
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScores++
        const p = document.createElement('p')
        p.innerText = 'you lost! paper beats rock'
        outcomeDiv.appendChild(p)
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScores++
        const p = document.createElement('p')
        p.innerText = 'you lost! scissors beats paper'
        outcomeDiv.appendChild(p)
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScores++
        const p = document.createElement('p')
        p.innerText = 'you lost! scissors beats paper'
        outcomeDiv.appendChild(p)
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScores++
        const p = document.createElement('p')
        p.innerText = 'you win! paper beats rock'
        outcomeDiv.appendChild(p)

    }
}
const checkForWinner = (playerScores, computerScores) => {
    if (playerScores > computerScores) {
        const h2 = document.createElement('h2')
        h2.innerText`you won ${playerScores} to ${computerScores} great job beating computer`
    }
    if (computerScores > computerScores) {
        const h2 = document.createElement('h2')
        h2.innerText` you lost ${playerScores} to ${computerScores}`
    }
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScores, computerScores);
})
paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScores, computerScores);
})

scissorsButton.addEventListener('click', () => {
    let computerSelection = computerPlay();
    let playerSelection = 'scissors';
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScores, computerScores);
})

//console.log(playRound(playerSelection, computerSelection));


//const game = () => {
    //for (let i = 0; i < 5; i++) {
    //const computerSelection = computerPlay()
    // const playerSelection = prompt("Enter Rock paper scissors").toLowerCase()
    //const result = playRound(playerSelection, computerSelection)
    //console.log(result)

    // }
/*
if (computerScores > playerScores) {
    return 'computer Won!!  try again ֎'
}
else if (playerScores > computerScores) {
    return 'you won you are a legend!!'

}
}*/

//console.log(game())