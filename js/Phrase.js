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
        let addPhraseToDisplay = document.querySelector('#phrase ul');
        addPhraseToDisplay.innerHTML = "";
        

    };
}


