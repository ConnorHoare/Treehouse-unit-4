/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
     this.phraseCharArr = [];
     this.phraseUL = document.getElementById('phrase').getElementsByTagName('UL')[0];
     this.matchedLetterArr = [];
   }



   addPhraseToDisplay() {
    //  Adds letter placeholders to the display when the game starts
    //  If we take length of the phrase passed into constructor above and loop through to create an LI for every letter
    //  Then append the HTML elements and add them inside of the UL
    //  Create if statement to check for space - if false => add classList of hide, letter and the actual phrase letter
    //  If space then add className space

    // Get the UL


    for (var i = 0; i < this.phrase.length; i++) {
      let li = document.createElement("LI");
      if (this.phrase[i] === " ") {
        li.classList.add("space");
      } else {
        li.classList.add("hide");
        li.classList.add("letter");
        li.classList.add(`${this.phrase[i]}`);
        li.innerText = `${this.phrase[i]}`
        this.phraseCharArr.push(this.phrase[i]);
        console.log(this.phraseCharArr);
      }
      this.phraseUL.appendChild(li);
    }
   }



   checkLetter(letter) {
     // Checks to see if the letter selected by the player matches a letter in the phrase
     // Get the current selected buttons inner text
     // Use if statement and includes method to check if the current buttons inner text matches the phrase.
     // const buttons = document.getElementById('keyrow').getElementsByTagName("BUTTON");


     for (var i = 0; i < this.phraseCharArr.length; i++) {
       this.matchedLetterArr.push(this.phraseCharArr[i]);
     }

     const letterText = letter.innerText;

     if (this.phraseCharArr.includes(letterText)) {
       letter.classList.add("chosen");
       letter.classList.remove("wrong");
     } else {
       letter.classList.add("wrong");
       letter.classList.remove("chosen")
     }

     return this.matchedLetterArr

   }

   showMatchedLetter() {
     // Reveals the letters on the board that the player has matched.

     // compare the phrase to the clicked buttons
     // if the buttons letter in included in the phrase -> change the class property of all li's who's innerText matches the buttons

// get the li elements with class of letter
     const li = this.phraseUL.querySelectorAll('.letter');
     // loop length of current selected phrase
     for ( var i = 0; i < this.phrase.length; i++) {
       // if the matchedLetterArr contains the current li index innerText
       if(this.matchedLetterArr.includes(li[i]).innerText) {
         // remove  the hide class of the current index
         li[i].classList.remove("hide");

         // add the show class of the current index
         li[i].classList.add("show");
       }
     }
   }
 }
