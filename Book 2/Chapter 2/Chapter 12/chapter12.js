// Custom function

// function smileyIt(theText) {
//     theText += " :-)";
//     return theText;
// };

// smileyIt("Hi there");

// console.log(smileyIt("Hi there"));

// alert(smileyIt("Hi there!"));

// RETURNING A VALUE

// function whatsTheNumber() {
//     return 3000;
// };

// var theTotal = whatsTheNumber() + 80;
// console.log(theTotal);

//===========================================

// TRAIN GAME ANIMATOION CODE

/*
todo: Create three global variables:
* trainSpeed (initial value = 250)
* trainPosition (initial value = 0)
* animation (no initial value)
*/

// var trainSpeed = 250;
// var trainPosition = 0;
// var animation;

/*
todo: Listen for click events on the train element and
call a function named speedUp when they happen.
*/

// var train = document.getElementById("train");
// train.addEventListener("click", speedUp);

/*
todo: Listen for click events on the stop button element
and call a function called stopTrain when they
happen.
*/

// var stopButton = document.getElementById("stopButton");
// stopButton.addEventListener("click", stopTrain);

// function speedUp() {
/*
todo: Check whether the train is already going as fast
as it can. If not, increase the speed.
*/

/*
If the train is already moving, stop it and then
restart with the new speed by calling a
function called frame.
*/

// if (trainSpeed > 10) {
//     trainSpeed -= 10;
// };
// clearInterval(animation);
// animation = setInterval(frame, trainSpeed);

/*
todo: Reposition the train and check whether the
train is crashed.
*/

// function frame() {
// trainPosition += 2;
// train.style.left = trainPosition + 'px';
// checkPosition(trainPosition);
// };

// };


/*
todo: Test whether the train is already crashed. If
not, stop the train.
*/

// function stopTrain() {
//     if (trainPosition < 550) {
//         clearInterval(animation);
//     };
// };

/*
todo: Check the train's current position and crash it
if it's at the end of the line.
*/

// function checkPosition(currentPosition) {
//     if (currentPosition === 550) {
//         alert("Crash!");
//         console.log("Crash!");
//         clearInterval(animation);
//     };
// };
