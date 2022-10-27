/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        // create a missed property
        this.missed = 0;
        // create array of phrases from Phrase class
        this.phrase = [new Phrase("On cloud nine"), new Phrase("Saved by the bell"), new Phrase("A country mile"), new Phrase("Heads will roll"), new Phrase("The devils advocate")]
        // create active class property
        this.activePhrase = null;
    }

    // reset function to reset all properties to default at the start of new game
    reset() {
      // remove all li's from phraseUL in active phrase
      this.activePhrase.phraseUL.innerHTML = ''
      // reset active phrase to default
      this.activePhrase = null;
      // get buttons
      const getButtons = document.getElementsByTagName('BUTTON');
      // loop over all buttons
      for (var i = 0; i < getButtons.length; i++) {
        // enable all buttons
        getButtons[i].disabled = false;
        // remove chosen and wrong classes on buttons
        getButtons[i].classList.remove("chosen");
        getButtons[i].classList.remove("wrong");
      }

      // reset the missed property to 0
      this.missed = 0;

      // get all heart li's
      const heartScore = document.querySelectorAll('.tries');
      // loop over heart li's
      for (var i = 0; i < heartScore.length; i++) {
        console.log(i);
      // get current li's img
      const img = heartScore[i].getElementsByTagName('img')[0];
      // set the image to liveheart
      img.src = "images/liveHeart.png";
      }
    }

    // start game function
    startGame() {
      // hide start screen overlay
      const startOverlay = document.getElementById("overlay");
      startOverlay.style.display = "none"
      // get random phrase and set to active phrase
      this.activePhrase = this.getRandomPhrase()
      // add phrase to board by calling addPhraseToDisplay() on activePhrase
      this.activePhrase.addPhraseToDisplay()
    }

    // get random game function
    getRandomPhrase() {
      // generate random number between 1 and 5
      let randomNum = Math.floor((Math.random() * 5) + 1);
      console.log(this.phrase[randomNum - 1]);
      // return a random index of the phrase array
      return this.phrase[randomNum - 1];
    }

    // create function which takes input
    handleInteraction(selection) {
      // if the selection input is not nill
      if (selection != null) {
        // disable the selection
        selection.disabled = true;
      }

      // if the checkletter method returns true
      if (this.activePhrase.checkLetter(selection) === true) {
        // add chosen class to selected button
        selection.classList.add("chosen");
        // call the showMatchedLetter to show the selected button
        this.activePhrase.showMatchedLetter(selection)
        // if game is won
        if (this.checkForWin()) {
          // call gameOver method adding win to the class name
          this.gameOver("win");
          // reset the values to default
          this.reset();
        }
        // if checkForWin is false
      } else {
        // add wrong to class list of selected button
        selection.classList.add("wrong");
        // remove a life
        this.removeLife()
      }
    }

    removeLife() {
      // Get all heart li's
      const heartScore = document.querySelectorAll('.tries');
      // check if the value of this.missed is above the amount of hearts on screen
      if (this.missed >= 4) {
        // call gameOver if no hearts on screen
        console.log("out of lives");
        this.gameOver("lose");
        // call reset if no hearts on screen
        this.reset();
      } else {

        // get the img of the current li element based on the this.missed var
        const img = heartScore[this.missed].getElementsByTagName('img')[0];
        // check if the current li's img is a liveheart
        if (img.src !== "images/lostheart.png") {
          // change img to lostheart
          img.src = "images/lostheart.png";
          // increment this.missed
          this.missed++;
        }
      }
    }

    // method to check if the game is won
    checkForWin() {
      // get all hidden items
      const hiddenItems = document.getElementsByClassName('hide');
      // check if the hidden items length is empty
      if (hiddenItems.length === 0) {
        return true
      } else {
        return false
      }
    }

    // Game over method which takes a result parameter
    gameOver(result) {
      // get the overlay and set display to block
      const startOverlay = document.getElementById("overlay");
      startOverlay.style.display = "block"
      // get gameOverMessage
      const gameOverMessage = document.getElementById('game-over-message');

      // if parameter is win
      if (result === "win") {
        // change gameOverMessage and class name
        gameOverMessage.innerText = "Congratulations you've won!";
        gameOverMessage.className = "win";
      } else {
        gameOverMessage.innerText = "Oops you ran out of lives!";
        gameOverMessage.className = "lose";
      }
    }
}
