'use strict';

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `🎉 Correct Number!`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

document.querySelector(`.check`).addEventListener(`click`, () => {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    //first scenario always assume no input
    document.querySelector(`.message`).textContent = `⛔️ No Number!`;
  }
}); //function gets called when event happens
