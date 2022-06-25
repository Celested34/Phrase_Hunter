/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//declare the the game class
class Game {
    //create a constructor method 
    constructor(){
        //add a property called missed and set to 0
        this.missed = 0;
        //add a property called phrases
        this.phrases = [
        //add 5 new phrase objects
           new Phrase('Never give up'),
           new Phrase('You can do this'),
           new Phrase('Failure is success in progress'),
           new Phrase('I can and I will'),
           new Phrase('Prove them wrong') 

        ];
        //add a property called activePhrase and set it to 'null'
        this.activePhrase = null;

    }
        //This method selects and return a random phrase
        getRandomPhrase() {
        let randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];    
        };


        //This method hides the start screen overlay
        startGame(){
            //hides the start screen
            let hideScreen = document.getElementById("overlay");
            hideScreen.style.display = 'none';

            //calls the method
            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay();

        }

}