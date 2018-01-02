// Set global variables

// Array holding words to guess
var answers = ["hamilton", "schuyler", "yorktown", "treasury", 
              "duel", "lafayette", "legacy","burr", "jefferson" "washington"];
// Variable to hold current word for user to guess
var currentWord = "";
// Variable turning letters into an array of each individual letter
var letters = [];
// Number of tiles, will dynamically update with each guess
var numTiles = 0;
// Array to hold word (letters and blanks) as guesses are made
var wordInProgress = [];
// Array to hold letters that were guessed incorrectly
var wrongLetters = [];
// Count wins, losses, and number of guesses remaining
var wins = 0;
var losses = 0;
var guessLeft = 9;


// Begin game logic

// Function to start game
function start() {
  // Set guesses so there's nine remaining again
  var guessLeft = 9

  // Randomizer to pick new word from answers array
  var currentWord = answers[Math.floor(Math.random() * answers.length)];
  // Turn letters into array of each individual letter
  var letters = currentWord.split("");
  // Count number of letters in current word
  var numTiles =letters.length;

  console.log(currentWord);

  // Reset the word in progress
  var wordInProgress = [];
  // Reset wrong guesses
  var wrongLetters =[];

  // For loop to fill word in progress with the correct number of blanks
  for (var i = 0; i < numTiles; i++) {
    wordInProgress.push("_");
  }

  console.log(wordInProgress);

  // Print number of guesses left
  document.getElementById("guesses-left").innerHTML = numTiles;
  // Print blanks in HTML
  document.getElementById("tiles").innerHTML = wordInProgress.join(" ");
  // Empty guesses from previous round
  document.getElementById("incorrect-guesses").innerHTML = wrongLetters.join(" ");
};

