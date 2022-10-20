/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startBtn = document.getElementById("btn__reset");
startBtn.addEventListener("click", startGame());

const keys = document.querySelectorAll(".keys");
keys.addEventListener("click", handleInteraction());