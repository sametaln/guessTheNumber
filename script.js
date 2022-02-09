'use strict';

// document.querySelector('.message').textContent = 'Correct Answer !';
let number = Math.trunc(Math.random() * 20) + 1; //secret number
console.log(number);
let score = 20;
let highscore = 0;

let x = function clickEvent() {
  let guess = Number(document.querySelector('.guess').value);

  //no guess
  if (!guess) {
    document.querySelector('.message').textContent = 'Please write a number.';
  }
  //win
  else if (guess === number) {
    document.querySelector('.message').textContent =
      'Congrats. You guessed right !';
    document.querySelector('.highscore').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('.number').textContent = guess;
    //document.querySelector('.again').addEventListener('click', y);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //guess is low
  else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
      //document.querySelector('.again').addEventListener('click', y);
    } else {
      document.querySelector('.message').textContent = 'Game is Over';
      document.querySelector('.score').textContent = 0;
      //document.querySelector('.again').addEventListener('click', y);
    }
  }
  //guess is high
  else if (guess > number && guess <= 20) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
      //document.querySelector('.again').addEventListener('click', y);
    } else {
      document.querySelector('.message').textContent = 'Game is Over';
      document.querySelector('.score').textContent = 0;
      //document.querySelector('.again').addEventListener('click', y);
    }
  }
  //guess is too high
  else if (guess > 20) {
    document.querySelector('.message').textContent =
      'Please guess a number between 1 and 20';
    //document.querySelector('.again').addEventListener('click', y);
  }
};

let y = function againbro() {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};
document.querySelector('.again').addEventListener('click', y);
document.querySelector('.check').addEventListener('click', x);
