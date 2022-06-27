/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//test your code step 2
// const phrase = new Phrase();
// const game = new Game();

//test your code step 3
// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

//test your code step 4 
// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

//test your code step 5
// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

//test code step 6
//  const game = new Game();
//  game.getRandomPhrase().addPhraseToDisplay();

//test step 7 
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//step 8 code - create an event listener
let game = '';
const btnReset = document.getElementById('btn__reset');

    btnReset.addEventListener('click', (e) => {
        game = new Game();
        game.startGame();
   
    });


//test step 9    

