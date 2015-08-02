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
  $('.parallax').parallax();
  $(".guess-area").on("click", ".btn-large", function() {
    var guessOne = new Guess(document.getElementById("guess-one").value);
    var guessTwo = new Guess(document.getElementById("guess-two").value);
    return isCorrectGuess(guessOne.noun, guessTwo.noun);
  });
});