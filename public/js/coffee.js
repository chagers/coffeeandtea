var Guess = function(noun) {
  this.noun = noun;
};

var isCorrectGuess = function(nounOne, nounTwo) {
  var guessOne = nounOne.toLowerCase().search("t");
  var guessTwo = nounTwo.toLowerCase().search("t");
  if (guessOne < 0 && guessTwo >= 0) {
    $('#modal1').openModal();
  } else {
    $('#modal2').openModal();
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