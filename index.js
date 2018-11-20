var word = require("./word");
var inquirer = require("inquirer");
var options = ["paper", "paper clip", "pen", "stapler", "printer", "highlighter", "sticky note", "manila folder", "stamp", "envelope", "toner", "pencil"];
var chosenWord = "";
var wordToGuess;
var guessesRemaining;

function pickWord() {
    var position = Math.floor(Math.random() * Math.floor(options.length));
    chosenWord = options[position];
}

initializeGame();

function initializeGame() {
    pickWord();
    console.log(chosenWord);
    guessesRemaining = chosenWord.length + 3;

    wordToGuess = new word(chosenWord);

    console.log("Let's play hangman!");
    console.log("You get " + guessesRemaining + " guesses for this word. Use them wisely!");

    wordToGuess.makeArray();
    wordToGuess.makeString();

    if (guessesRemaining > 0) {
        playGame();
    } else {
        console.log("You lost! Bummer. Try again.");
        wantToPlayAgain();
    }

}

function playGame() {
    if (wordToGuess.lettersGuessed < chosenWord.length) {
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Guess a letter!"
            }
        ]).then(function (answer) {
            guessesRemaining--;
            console.log(Object.values(answer)[0]);
            wordToGuess.guess(Object.values(answer)[0]);
            console.log("You have " + guessesRemaining + " guesses remaining!")
            playGame();
        });
    } else {
        wordToGuess.makeString();
        console.log("You won!");
        wantToPlayAgain();
    };
};


function wantToPlayAgain() {
    inquirer.prompt([
        {
            type: "list",
            name: "again",
            message: "Do you want to play again?",
            choices: ["Yes", "No"]
        }
    ]).then(function (answer) {
        var choice = Object.values(answer)[0];
        if (choice === "Yes") {
            chosenWord = "";
            initializeGame();
        }
    });
};