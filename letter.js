function Letter(character) {
    this.character = character;
    this.guessed = false;
    this.showCharacter = function() {
        if(this.guessed == true) {
            return this.character + " ";
        } else {
            return "_ ";
        };
    };
    this.checkCharacter = function(guess) {
        if(guess === this.character) {
            this.guessed = true;
        };
    };
};

module.exports = Letter;