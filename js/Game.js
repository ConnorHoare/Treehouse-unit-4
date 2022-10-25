/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrase = [new Phrase("On cloud nine"), new Phrase("Saved by the bell"), new Phrase("A country mile"), new Phrase("Heads will roll"), new Phrase("The devils advocate")]
        this.activePhrase = null;
    }

    reset() {
      this.activePhrase.phraseUL.innerHTML = ''
      this.activePhrase = null;
      const getButtons = document.getElementsByTagName('BUTTON');
      for (var i = 0; i < getButtons.length; i++) {
        getButtons[i].disabled = false
        getButtons[i].classList.remove("chosen");
        getButtons[i].classList.remove("wrong");
      }
      this.missed = 0;
      const getImgs = document.getElementsByTagName('IMG');
      for (var i = 0; i < getImgs.length; i++) {
        getImgs[i].src = "images/liveHeart.png";
      }

    }
    startGame() {
      // hide start screen overlay
      const startOverlay = document.getElementById("overlay");
      startOverlay.style.display = "none"
      // get random phrase and set to active phrase
      this.activePhrase = this.getRandomPhrase()
      // add phrase to board by calling addPhraseToDisplay() on activePhrase
      this.activePhrase.addPhraseToDisplay()
    }

    getRandomPhrase() {
      let randomNum = Math.floor((Math.random() * 5) + 1);
      console.log(this.phrase[randomNum - 1]);
      return this.phrase[randomNum - 1];
    }

    // create function which takes input
    handleInteraction(selection) {
      // if the selection input is not nill
      if (selection != null) {
        // disable the selection
        selection.disabled = true;
      }

      if (this.activePhrase.checkLetter(selection) === true) {
        selection.classList.add("chosen");
        this.activePhrase.showMatchedLetter(selection)
        if (this.checkForWin()) {
          this.gameOver("win")
          this.reset();
        }
      } else {
        selection.classList.add("wrong");
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
        this.reset();
      }

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

    checkForWin() {
      const hiddenItems = document.getElementsByClassName('hide');
      if (hiddenItems.length === 0) {
        return true
      } else {
        return false
      }
    }

    gameOver(result) {
      const startOverlay = document.getElementById("overlay");
      startOverlay.style.display = "block"
      const gameOverMessage = document.getElementById('game-over-message');

      if (result === "win") {
        gameOverMessage.innerText = "Congratulations you've won!";
        gameOverMessage.className = "win";
      } else {
        gameOverMessage.innerText = "Oops you ran out of lives!";
        gameOverMessage.className = "lose";
      }
    }
}
