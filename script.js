'use strict';

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

const secretNumber = Math.trunc(Math.random() * 20) + 1; //state variable
let score = 20; //state variable

document.querySelector('.number').textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, () => {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    //first scenario always assume no input
    //when there is no input
    document.querySelector(`.message`).textContent = `⛔️ No Number!`;
  } else if (guess === secretNumber) {
    //when player wins
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
  } else if (guess > secretNumber) {
    //when guess is too high
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈 Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥 You lost the game!`;
      document.querySelector(`.score`).textContent = 0;
    }
  } else if (guess < secretNumber) {
    //when guess is too low
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📉 Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥 You lost the game!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
}); //function gets called when event happens
