var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

var game = document.querySelector('.game');

var winsBox = document.querySelector('#winsBox');
var lossesBox = document.querySelector('#lossesBox');
var guessesLeftBox = document.querySelector('#guessesLeftBox');
var guessesMadeBox = document.querySelector('#guessesMadeBox');


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = '';

// create a blank array the pushes every key that is pressed into it
// write a for loop that itterates 9 times and checks to see
// if the userGuess === computerChoice
// if so, end it with psychic(alphabet)

var psychic = function (arr) {
    var tempComputerChoice = arr[Math.floor(Math.random() * arr.length)];
    return tempComputerChoice;

}

var computerChoice = psychic(alphabet);


document.onkeypress = function (event) {
    var userGuess = event.key;

    guessesMade += userGuess + ', ';
    guessesLeft--;

    console.log(computerChoice);

    if (userGuess === computerChoice) {
        wins++;
        guessesLeft = 9;
        guessesMade = '';
        alert('You win');

    } else if (guessesLeft === -1) {

        losses++;
        guessesMade = ' ' + userGuess + ' ';
        guessesLeft = 9;

    }

    winsBox.innerHTML = wins;
    lossesBox.innerHTML = losses;
    guessesLeftBox.innerHTML = guessesLeft;
    guessesMadeBox.innerHTML = guessesMade;

}

