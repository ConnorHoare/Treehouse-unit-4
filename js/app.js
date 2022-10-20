/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game;

const startBtn = document.getElementById("btn__reset");
startBtn.addEventListener("click", e => {
  game.startGame()
});

const keyboard = document.getElementById('qwerty');
keyboard.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    console.log(e.target.textContent);
    game.handleInteraction(e.target.textContent);
  }
})
