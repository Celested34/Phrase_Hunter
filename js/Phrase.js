/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//declare the phrase class
class Phrase {
    //create a constructor method with 1 paramter 'phrase'
    constructor(phrase){
        //add a property called phrase    
        this.phrase = phrase.toLowerCase();

    }

    //add the addPhraseToDisplay method
    addPhraseToDisplay() {

        //use querySelector to grab the phrase section 
        let addPhrase = document.querySelector('#phrase ul'); 

        //create a new variable to store the phrase being split by letter  
        let phraseSplit = this.phrase.split('');
      
        
        //create a for each loop 
        phraseSplit.forEach((character) => {
            let li = document.createElement("li");
            li.innerHTML = character;
            //set class name to 'hide letter' if its a letter
            //if not set class name for space
            if (character !== " ") {
              li.className = `hide letter ${character}`;
            } else {
              li.className = `space ${character}`;
            }
            addPhrase.appendChild(li);
          });
            
    }
    
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter){
        return this.phrase.includes(letter)
    };
    console.log(checkLetter)

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        //Show matching letters on the board in browser, 
        let  showLetter = document.querySelectorAll('.letter');

        for (let i = 0; i < showLetter.length; i++){
            if(letter === showLetter[i].textContent){
                showLetter[i].classList.remove('hide');
                showLetter[i].classList.add('show');
            }
        }
        
    };
}


