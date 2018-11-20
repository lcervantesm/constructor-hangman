var letter = require("./letter");
var letterArray = [];
var wordString = "";

function Word(wordToGuess) {
    this.wordToGuess = wordToGuess;
    this.lettersGuessed = 0;
    this.makeArray = function () {
        for (i = 0; i < wordToGuess.length; i++) {
            var newLetter = new letter(this.wordToGuess[i]);
            letterArray.push(newLetter);
        };
    };
    this.makeString = function() {
        wordString = "";
        for (i = 0; i < letterArray.length; i++) {
            var character = letterArray[i].showCharacter();
            wordString += character;
        };
        console.log(wordString);
    };
    this.guess = function(guess) {
        for (i = 0; i < letterArray.length; i++) {
            letterArray[i].checkCharacter(guess);
        };
        this.makeString();
        this.countGuessed();
    };
    this.countGuessed = function() {
        this.lettersGuessed = 0;
        for (i = 0; i < letterArray.length; i++) {
            if (letterArray[i].guessed === true) {
                this.lettersGuessed ++;
            };
        };
    };
};

module.exports = Word;
