/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
     this.phraseCharArr = [];
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
        phraseCharArr.push(li[i].innerText);
      }
      phraseUL.append(li);
    }
   }

   

   checkLetter(e) {
     // Checks to see if the letter selected by the player matches a letter in the phrase
     // Get the current selected buttons inner text
     // Use if statement and includes method to check if the current buttons inner text matches the phrase.
     // const buttons = document.getElementById('keyrow').getElementsByTagName("BUTTON");

     let matchedLetterArr = [];

     if (phrase.includes(e.target.value)) {
       matchedLetterArr.push(e.target.value)
     } else {
       console.log("Incorrect");
     }

     return matchedLetterArr

   }

   showMatchedLetter() {
     // Reveals the letters on the board that the player has matched.

     // compare the phrase to the clicked buttons
     // if the buttons letter in included in the phrase -> change the class property of all li's who's innerText matches the buttons

     const li = phraseUL.querySelectorAll('letter');
     for ( var i = 0; i < li.length; i++) {
       if(matchedLetterArr.includes(li[i].innerText)) {
         li[i].classList.remove("hide");
         li[i].classList.add("show");
       }
     }
   }
 }