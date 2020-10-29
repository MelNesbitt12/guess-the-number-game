'use strict';

// secret number to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1
// score starts at 20(this is a state variable)
let score = 20
// high score starts at 0
let highScore = 0

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

// create a click event on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess =
  // turn guess into a number from a string
  Number(document.querySelector('.guess').value)

  // if there is no input:
  if (!guess) {
    // document.querySelector('.message').textContent = '🥺 No secretNumber entered'
    displayMessage('🥺 No secretNumber entered')

  // if the player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!')
    // display the secret number:
    document.querySelector('.number').textContent = secretNumber
    // select the body element to turn green upon win
    document.querySelector('body').style.backgroundColor = '#60b347'
    // change the width of the number
    document.querySelector('.number').style.width = '30rem'

    // add high score:
    if(score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }

  // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1){
      displayMessage(guess > secretNumber ? '😱 Guess is too high...' : '😱 Guess is too low...')
      score --
      document.querySelector('.score').textContent = score
    } else {
        displayMessage('😿 You lost the game!')
        document.querySelector('.score').textContent = 0
    }
  }
})

// game reset:
document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1

  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''

  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})


// Coding Challenge #1
/*
Implement a game rest function, so that the player can make a new guess. Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
*/
