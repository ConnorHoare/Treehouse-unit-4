/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrase = [new Phrase("On cloud nine"), new Phrase("Saved by the bell"), new Phrase("A country mile"), new Phrase("Heads will roll"), new Phrase("The devil's advocate")]
        this.activePhrase = null;
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

      this.activePhrase.checkLetter(selection)

      this.activePhrase.showMatchedLetter()

    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }
}
