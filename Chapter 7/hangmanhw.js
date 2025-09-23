// Add more words

var words = ["javascript", "polar bear", "amazing", "pancake", "ocean", "keyboard", "sunflower"];
var word = words[Math.floor(Math.random() * words.length)];

// create answer array

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
        answerArray[i] = " ";  // Show spaces immediately
    } else {
        answerArray[i] = "_";
    }
}

//  create number of guess

var remainingLetters = word.replace(/ /g, "").length;  // Ignore spaces
var maxGuesses = 10;
var remainingGuesses = maxGuesses;

while (remainingLetters > 0 && remainingGuesses > 0) {
   
    // Show the player's progress
    alert(answerArray.join(" "));
    
    // Take input from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing. Remaining guesses: " + remainingGuesses);
    
    if (guess === null) {
        break; // Exit the game
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        
        // Make guess case-insensitive

        guess = guess.toLowerCase();  
        
        // to check f guesss is correct

        var correctGuess = false;
for (var j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
                correctGuess = true;
            }
        }

// for wrong guess 

        if (!correctGuess) {
            remainingGuesses--;
            alert("Wrong guess! You have " + remainingGuesses + " guesses left.");
        }
    }
}

// Final message at the end of the game

alert(answerArray.join(" "));

if (remainingLetters === 0) {
    alert("🎉 Good job! The answer was: " + word);
} else {
    alert("😢 Out of guesses! The word was: " + word);
}
