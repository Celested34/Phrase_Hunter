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
            if (this.missed < 4) {
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
                overlay.className = 'win';
                overlay.style.display = '';               
            } else if (gameWon === false) {   
                gameOver.textContent = 'Game Over';
                overlay.className = 'lose';
                overlay.style.display = '';
            }

            this.resetGame();

        }


        handleInteraction(button) {
            // console.log(button);
            
            //disable the button
            button.disabled = true;

            //check if the button text matches the active phrase letter
            if (this.activePhrase.checkLetter(button.innerHTML)) {
               
                //call the method to show matched letter
                this.activePhrase.showMatchedLetter(button.innerHTML);
                //add the class 'chosen' 
                button.classList.add('chosen');

                //call the checkForWin method
                    if(this.checkForWin() === true) {
                        this.gameOver(true);
                    };
            } else {            
                //add the class 'wrong' 
                button.classList.add('wrong');
                //call removeLife 
                this.removeLife();
            }       


        };   

        //resets the game
        resetGame() {

            //remove li elements from the phrase
            let removeLi = document.querySelector('#phrase ul');
            removeLi.innerHTML = '';
            
            //enable onscreen keyboard button
            let keyboard = document.querySelectorAll('.key');
            keyboard.forEach(button => {
                button.disabled = false;
                button.classList.add('key');
                button.classList.remove('chosen')
                button.classList.remove('wrong') 
            })

            //reset hearts with a for each loop
            let resetHearts = document.querySelectorAll('img');
            resetHearts.forEach(pic => {
                pic.src = 'images/liveHeart.png';
            })
        

        
        };
            




}