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
        phraseSplit.forEach(character => {
            let li = document.createElement('li')
            li.innerHTML = letter;
            //set class name to 'hide letter' if its a letter
            //if not set class name for space
            if (letter !== ' '){
                
                `hide letter ${letter}`
            } else {
                `space ${letter}` 
            }
            addPhrase.appendChild(li);
            });
            
    }
    
}


