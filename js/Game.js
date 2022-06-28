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
           new Phrase('Okay'),
           new Phrase('Maybe'),
           new Phrase('Ready'),
           new Phrase('Great'),
           new Phrase('Yes') 

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
            //hides the start screen overlay
            let hideScreen = document.getElementById("overlay");
            hideScreen.style.display = 'none';

            //calls the method to get a random phrase
            this.activePhrase = this.getRandomPhrase();
            this.activePhrase.addPhraseToDisplay();

        }

        
    
       //return true if game was won if not return false
        checkForWin() {
            //get all the letter elements from the active phrase
            let hideLetters = document.querySelectorAll('.hide');
            //if there are no letter elements left in the active phrase
            if (hideLetters.length === 0) {
                return true;
            } else {
                return false;
            }
        };

        
        //Removes a life from the scoreboard
        //Checks if player has remaining lives and ends game if player is out  
        removeLife() {
            //get the image elements from the scoreboard
            let lives = document.querySelectorAll('img');
            //if the player has more than 0 lives
            if (this.missed < 5) {
                //remove a life from the scoreboard
                lives[this.missed].src = 'images/lostHeart.png';
                //increment the missed property
                this.missed++;
            } else {
                //end the game
                this.gameOver(false);
            }

        }

        //Displays game over message
        gameOver(gameWon) {
        
            let gameOver = document.querySelector('#game-over-message');

            let overlay = document.querySelector("#overlay");

            if (gameWon === true) {
                gameOver.textContent = 'Winner!';
                overlay.className = 'winner';
                overlay.style.display = '';               
            } else if (gameWon === false) {   
                gameOver.textContent = 'Game Over';
                overlay.className = 'over';
                overlay.style.display = '';
            }


        }
}