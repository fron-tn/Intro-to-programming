// Creating a function

// var ourFirstFunction = function () {
//     console.log("Hello World!");
//     return 5;
// };
// ourFirstFunction();
// console.log(ourFirstFunction());


// Passing Arguments to a Function

// var sayHelloTo = function (name) {
//     console.log("Hello " + name + "!")
// };
// sayHelloTo("Samuel");
// sayHelloTo("Johnson");
// sayHelloTo(3);


// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + ": " + whatToDraw);
//     };
// };
// printMultipleTimes(5, "=^.^=");
// printMultipleTimes(3, 10);
// printMultipleTimes(2, true);
// printMultipleTimes(2, ourFirstFunction());


// Returning Values from Functions

var double = function (number) {
    return number * 2;
};
double(10);
console.log(double(10));

console.log(double(5) + double(6));

console.log(double(double(3)))

// Using Functions to Simplify Codes

var pickRandomWord = function (words) {
    return words [Math.floor(Math.random() * words.length)];
};

var randomWords = ["Planet", "Worm", "Flower", "Computer"];

pickRandomWord(randomWords);
console.log(pickRandomWord(randomWords));

console.log(pickRandomWord(["Aj", "Darrel", "Denzil", "Malcom", "Joseph", "Sam"]));

// Random Insult Generator using Function call

var randomBodyParts = ["Leg", "Hand", "Eyes", "Shoulder"];
var randomAdjectives = ["Silly", "Lazy", "Foolish", "Smart"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat", "Goat"];

// Join all the random strings into a sentence:

var randomString = "Your " + pickRandomWord(randomBodyParts) +
" is like a " + pickRandomWord(randomAdjectives) +
" " + pickRandomWord(randomWords) + "!!!";
console.log(randomString);

// Making Random Insult Generator Into A Function

generateRandomInsult = function () {
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// Join all the random strings into a sentence:

var randomString = "Your " + pickRandomWord(randomBodyParts) +
" is like a " + pickRandomWord(randomAdjectives) +
" " + pickRandomWord(randomWords) + "!!!";
return randomString;
};
console.log(generateRandomInsult());

// Option 2

var fifthLetter = function (name) {
    if(name.length < 5) {
        return "Your name is too short";
    };

    return "Fifth letter of your name is " + name[4] + ".";
};

console.log(fifthLetter("Samuel"));
console.log(fifthLetter("Ye"));

// Using Return Instead of If/Else statement

var medalForScore = function (score) {
    if (score < 3) {
        return "Bronze";
    };
    if (score < 7) {
        return "Silver";
    };
    return "Gold";
};
medalForScore(5);
console.log(medalForScore(1));
console.log(medalForScore(5));
console.log(medalForScore(10));


var medalForScore = function (score) {
    if (score < 3) {
    return "Bronze";
     } else if (score < 7) {
    return "Silver";
} else {
    return "Gold";
};
};

console.log(medalForScore(10));


// Shorthand vs Longhand creation of Functions

var double = function (number) {
    return number * 2;
};
