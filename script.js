'use strict';

let score = 20;
let secertNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const displayMassage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateScore = function (newScore) {
  document.querySelector('.score').textContent = newScore;
};

const resetStyles = function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const handleWin = function () {
  displayMassage('🎉 congrats');
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
};

// Again button code
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secertNumber = Math.trunc(Math.random() * 20) + 1;

  displayMassage('start guessing');
  document.querySelector('.guess').value = '';
  resetStyles();
  updateScore(score);
  document.querySelector('.highscore').textContent = highscore;
});

// Check button code
document.querySelector('.check').addEventListener('click', function () {
  const Guess = Number(document.querySelector('.guess').value);

  // No input
  if (!Guess) {
    displayMassage('⛔ Error');
  } else if (secertNumber === Guess) {
    handleWin();
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    if (score > 0) {
      displayMassage(secertNumber > Guess ? '📉Too low' : '📈Too high');
      score--;
      updateScore(score);
    } else {
      displayMassage('😔 You lost the game');
      updateScore(0);
    }
  }
});
