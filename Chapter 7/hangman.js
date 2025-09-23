var words = ["javascript", "polar bear", "amazing", "pancake"];
var word = words[Math.floor(Math.random() * words.length)];


var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

var remainingLetters = word.length;

while (remainingLetters > 0) {
    // Show the players progress
alert(answerArray.join(" "));
// Take Input from The Players
var guess = prompt("Guess a letter, or click Cancel to stop playing");
if (guess === null) {
    break;
} else if (guess.length !== 1) {
alert("Please enter a single");
} else {
for (var j = 0; j < word.length; j++) {
if (word[j] === guess) {

// Update answerArray and remainingLetters for every correct guess

answerArray[j] = guess;
remainingLetters--;
   };
  };
 };
};
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
