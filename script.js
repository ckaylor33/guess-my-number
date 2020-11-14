'use strict';

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

let secretNumber = Math.trunc(Math.random() * 20) + 1; //state variable
let score = 20; //state variable
let highscore = 0; //state variable

const displayMessage = message => {
  document.querySelector(`.message`).textContent = message;
};

const displayColour = colour => {
  document.querySelector(`body`).style.backgroundColor = colour;
};

const selectWidth = width => {
  document.querySelector(`.number`).style.width = width;
};

document.querySelector(`.check`).addEventListener(`click`, () => {
  const guess = Number(document.querySelector(`.guess`).value);

  //first scenario always assume no input
  //when there is no input
  if (!guess) {
    displayMessage(`⛔️ No Number!`);
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    displayColour(`#60b347`);
    selectWidth(`30rem`);
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`💥 You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`.number`).textContent = `X`;
      displayColour(`#FF5733`);
      selectWidth(`30rem`);
    }
  }
}); //function gets called when event happens

document.querySelector(`.again`).addEventListener(`click`, () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector(`.guess`).value = ``;
  displayColour(`#222`);
  selectWidth(`15rem`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
});
