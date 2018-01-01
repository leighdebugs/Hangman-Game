$(document).ready(function() {
window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var guessRem = 12
  var answers = ["hamilton", "schuyler sisters", "and peggy", "the battle of yorktown", 
              "immigrants we get the job done", "marquis de lafayette", "write like you're running out of time",
              "the world turned upside down",];

  

    
//game panel - current word/phrase
var guessThis = answers[Math.floor(Math.random() * answers.length)];
var numLetters = guessThis.length

numLetters.forEach(function(setup) {
	var letterTiles = $("tiles");
	letterTiles.attr("data-letter", alphabet);
	letterTiles.text(
		if guess )


})

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + guessRem + " shots left.";
    if (lives < 1) {
      showLives.innerHTML = "You were outgunned, outmanned, outnumbered, outplanned!";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You did not throw away your shot!";
      }
    }
  }




  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    

    
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();
  }

  play();
  


   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}
}

