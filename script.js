'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = Number(document.querySelector('.highscore').textContent);
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const initializeGame = () => {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
};

const setHighscore = (score, highscore) => {
  if (score > highscore) {
    document.querySelector('.highscore').textContent = score;
    highscore = score;
  }
};

const setToWinnerScreen = () => {
  displayMessage('Correct number!');
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').textContent = secretNumber;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number!');
    // When player wins
  } else if (guess === secretNumber) {
    setToWinnerScreen();
    setHighscore(score, highscore);

    //When answer is wrong
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  initializeGame();
});
