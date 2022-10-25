/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrase = [new Phrase("On cloud nine"), new Phrase("Saved by the bell"), new Phrase("A country mile"), new Phrase("Heads will roll"), new Phrase("The devils advocate")]
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

      if (this.activePhrase.checkLetter(selection) === true) {
        selection.classList.add("chosen");
        this.activePhrase.showMatchedLetter(selection)
        this.checkForWin()
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
      // get all lis in active phrase
       const li = this.activePhrase.phraseUL.querySelectorAll('.letter');
       let arr = [li];

       console.log(arr);
       // loop over lis
       for (var i = 0; i < li.length; i++) {
         console.log(li[i].classList);
         // check to see if the current li contains li class
         if (li[i].classList.contains("hide")) {
           arr.splice(li[i]);
           console.log(arr);
           if (arr.length === 0) {
             this.gameOver("win")
           }
         }
         return
       }
    }

    gameOver(result) {
      const startOverlay = document.getElementById("overlay");
      startOverlay.style.display = "block"
      const gameOverMessage = document.getElementById('game-over-message');
      gameOverMessage.classList.add(result);

      if (result === "win") {
        gameOverMessage.innerText = "Congratulations you've won!"
      } else {
        gameOverMessage.innerText = "Oops you ran out of lives!"
      }
    }
}
