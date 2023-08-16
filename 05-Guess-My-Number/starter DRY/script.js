'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector(`.number`).textContent = secretNumber;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage(`⛔ No number!`);

    // Where player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    displaySecretNumber(secretNumber);

    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    // High score
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    // Where guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score = score - 1;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`💥 You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

/* CODING CHALLENGE 1:

Implement a game rest functionality, so that the player can make a new guess!

Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displaySecretNumber(secretNumber);

  displayMessage(`Start guessing...`);
  document.querySelector(`input`).value = ``;
  document.querySelector(`.number`).textContent = `?`;

  document.querySelector(`body`).style.background = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
