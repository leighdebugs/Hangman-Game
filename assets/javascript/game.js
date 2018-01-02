// Set global variables

// Array holding words to guess
var answers = ["hamilton", "schuyler", "yorktown", "treasury", "duel", "lafayette", "legacy", "burr", "jefferson", "washington"];
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
function startGame() {
  // Set guesses so there's nine remaining again
  guessLeft = 9

  // Randomizer to pick new word from answers array
  currentWord = answers[Math.floor(Math.random() * answers.length)];
  // Turn letters into array of each individual letter
  letters = currentWord.split("");
  // Count number of letters in current word
  numTiles =letters.length;

  console.log(currentWord);

  // Reset the word in progress
  wordInProgress = [];
  // Reset wrong guesses
  wrongLetters =[];

  // For loop to fill word in progress with the correct number of blanks
  for (var i = 0; i < numTiles; i++) {
    wordInProgress.push("_");
  };

  console.log(wordInProgress);

  // Print number of guesses left
  document.getElementById("guesses-left").innerHTML = numTiles;
  // Print blanks in HTML
  document.getElementById("tiles").innerHTML = wordInProgress.join(" ");
  // Empty guesses from previous round
  document.getElementById("incorrect-guesses").innerHTML = wrongLetters.join(" ");
};

// Function to compare guesses to the current word
function checkGuesses(guess) {
  // This will change depending on whether or not a guess matches one of the letters
  var letterInWord = false;

  // For loop to check if user guess exists within letters array
  for (var i = 0; i < numTiles; i++) {
    if (currentWord[i] === guess) {
      // wordInProgress changed to True
      letterInWord = true;
    };
  };
  // If guess is equal to one of the letters, find where it goes based on index
  if (letterInWord) {
    // For loop to go through word
    for (var j = 0; j < numTiles; j++) {
      // Check for match 
      if (currentWord[j] === guess) {
        wordInProgress[j] = guess;
      }
    }
    console.log(wordInProgress);
      // add letter to list of incorrect guesses if there is no match
      
      }else {
        wrongLetters.push(guess);
        guessLeft--;
      };
    };

// function to end round
function endRound() {
  console.log("Wins " + wins + "Losses " + losses);

  // print new number of guesses
  document.getElementById("guesses-left").innerHTML = guessLeft;
  // print array of guesses and blanks
  document.getElementById("tiles").innerHTML = wordInProgress.join(" ");
  // print incorrect guesses
  document.getElementById("incorrect-guesses").innerHTML = wrongLetters.join(" ");

  // If user has guessed all letters, round ends and win counter goes up
  if (letters.toString() === wordInProgress.toString()) {
    wins++;
    alert("Winner!");
    document.getElementById("win-count").innerHTML = wins;
    startGame();
    // otherwise add to loss counter and restart game
  } else if (guessLeft === 0) {
    losses++;
    alert("The word was '" + currentWord + "' ! Sorry, try again!");
    document.getElementById("loss-count").innerHTML = losses;
    startGame()
  }
};
// capture onkey to play game
startGame();

document.onkeyup = function(event) {
  // convert all key presses to lowercase
  var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
  // check against current word
  checkGuesses(letterGuess);
  // complete round
  endRound();
};

