/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game;

const startBtn = document.getElementById("btn__reset");
startBtn.addEventListener("click", e => {
  game.startGame()
});

// get the keyboard buttons
const keyboard = document.getElementById('qwerty');
// add event listener to the keyboard
keyboard.addEventListener("click", e => {
  // if the selected keyboard button is a button
  if (e.target.tagName === "BUTTON") {
    // set the button to a constant
    console.log(e.target.textContent);
    const buttonClicked = e.target;
    // call the handle interaction and pass in the target to disable the selected button
    game.handleInteraction(buttonClicked);
  }
})
