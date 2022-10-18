/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   addPhraseToDisplay() {
    //  Adds letter placeholders to the display when the game starts
    //  If we take length of the phrase passed into constructor above and loop through to create an LI for every letter
    //  Then append the HTML elements and add them inside of the UL
    //  Create if statement to check for space - if false => add classList of hide, letter and the actual phrase letter
    //  If space then add className space

    // Get the UL
    let phraseUL = document.getElementById('phrase').getElementsByTagName('UL')[0];

    for (var i = 0; i < phrase.length; i++) {
      let li = document.createElement("LI");
      if (li[i].innerText === " ") {
        li[i].classList.add("space");
      } else {
        li[i].classList.add("hide");
        li[i].classList.add("letter");
        li[i].classList.add(`${li[i].innerText}`);
      }
      phraseUL.append(li);
    }
   }

   checkLetter() {
     // Checks to see if the letter selected by the player matches a letter in the phrase
   }

   showMatchedLetter() {
     // Reveals the letters on the board that the player has matched.
   }
 }
