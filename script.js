'use strict';

//* Selecting Elements
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let check = document.querySelector('.check');
let highScore = document.querySelector('.highscore');
let guess = document.querySelector('.guess');
let Num = document.querySelector('.number');
let Again = document.querySelector('.again');

//* Variables
let secretNum = Math.trunc(Math.random() * 20 + 1);
let RealScore = 20;
let Highscore = 0;
let clapSound = document.getElementById("clap");
let loseSound = document.getElementById("lose");

//* function

function playWin() {
  clapSound.currentTime = 0; // يرجّع الصوت لأول لحظة
  clapSound.play();
}

function playLose() {
  loseSound.currentTime = 0;
  loseSound.play();
}

let loseSit = function () {
  message.textContent = 'You lose';
  document.body.style.backgroundColor = '#f42c2cff';
  Num.textContent = secretNum;
  Num.style.width = '15rem';
  guess.value = '';
  playLose();
};

let messageFunc = function (msg) {
  message.textContent = msg;
};

let winSit = function () {
  message.textContent = 'congrats';
  document.body.style.backgroundColor = '#60b347';
  Num.textContent = secretNum;
  Num.style.width = '30rem';
  if (RealScore > Highscore) {
    Highscore = RealScore;
    highScore.textContent = Highscore;
  }
  playWin();
};





let AgainFunc = function () {
  score.textContent = RealScore;
  document.body.style.backgroundColor = '#222';
  Num.style.width = '15rem';
  Num.textContent = '?';
  score.textContent = RealScore = 20;
  guess.value = '';
  messageFunc('Start guessing...');

  secretNum = Math.trunc(Math.random() * 20 + 1);
};

check.addEventListener('click', function () {
  let userNum = Number(guess.value);
  console.log(userNum);

  if (!userNum) {
    messageFunc('NO number selected');
  } else if (userNum === secretNum) {
    winSit();
  } else if (userNum !== secretNum) {
    if (RealScore > 1) {
      messageFunc(userNum > secretNum ? 'Too High' : 'Too low');
      RealScore--;
      score.textContent = RealScore;
    } else {
      loseSit();
    }
  }
});

Again.addEventListener('click', function () {
  AgainFunc();
});
