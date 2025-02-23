let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#submit');
const guessArray = document.querySelector('.guesses');
const remainingAttempts = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


let prevGuess = []
let numGuesses = 1

const p = document.createElement('p');

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number more than 0')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuesses > 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame(guess)
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (randomNumber === guess) {
        displayMessage('You guessed it right')
        endGame(guess)
    } else if (randomNumber < guess) {
        displayMessage('Number is too high')
    } else if (randomNumber > guess) {
        displayMessage('Number is too low')
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessArray.innerHTML += `${guess} , `
    numGuesses++;
    remainingAttempts.innerHTML = `${11 - numGuesses}`
    if(numGuesses>10){
        endGame();
    }
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    e.preventDefault()
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessArray.innerHTML = '';
    remainingAttempts.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;

    })
}

function endGame() {
userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}