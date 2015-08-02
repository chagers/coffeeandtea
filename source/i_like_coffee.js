var Guess = function(noun) {
  this.noun = noun;
};

var isCorrectGuess = function(nounOne, nounTwo) {
  var guessOne = nounOne.toLowerCase().search("t");
  var guessTwo = nounTwo.toLowerCase().search("t");
  if (guessOne < 0 && guessTwo >= 0) {
    alert("Whoopee, now you're on the trolley! Can you guess right again?");
  } else {
    alert("Nope! Try again, kiddo.");
  }
};


$(function(){
  $(".guess-area").on("click", ".btn-large", function() {
    var guessOne = new Guess(document.getElementById("guess-one").value);
    var guessTwo = new Guess(document.getElementById("guess-two").value);
    return isCorrectGuess(guessOne.noun, guessTwo.noun);
  });
});



// Grandma = {
//   wins: [],
//   didIWin: function () {
//     if (Grandma.wins >= 5) {
//       console.log("You got five right answers! You must've figured out the pattern by now...");
//       console.log("Well done, you.");
//       return true;
//   }
//     else
//       console.log("Keep plugging along... You'll never learn any younger!");
//       return false;
//   },
// };

// WhipperSnapper = {
//   ask: function(nounOne, nounTwo) {
//     var nounOne = nounOne.search("t"),
//     nounTwo = nounTwo.search("t");
//     if (noun < 0 && nounTwo >= 0) {
//       console.log("Whoopee, now you're on the trolley! Can you guess right again?");
//       return Grandma.wins++;
//     }
//     else
//       console.log("Nope! Try again, kiddo.");
//       return Grandma.wins=0;
//   }
// };