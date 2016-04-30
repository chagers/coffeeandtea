// $(function(){
//   var Guess = function(noun) {
//     this.noun = noun;
//   };

//   var isCorrectGuess = function(nounOne, nounTwo) {
//     var guessOne = nounOne.toLowerCase().search("t");
//     var guessTwo = nounTwo.toLowerCase().search("t");
//     if (guessOne < 0 && guessTwo >= 0) {
//       $('#modal1').openModal();
//     } else {
//       $('#modal2').openModal();
//     }
//   };

//   $('.parallax').parallax();

//   $(".guess-area").on("click", ".btn-large", function() {
//     var guessOne = new Guess(document.getElementById("guess-one").value);
//     var guessTwo = new Guess(document.getElementById("guess-two").value);
//     return isCorrectGuess(guessOne.noun, guessTwo.noun);
//   });
// });

$(document).ready(function () {
  $(".parallax").parallax();

  // var Guess = function(nounOne, nounTwo) {
  //   this.nounOne = nounOne;
  //   this.nounTwo = nounTwo;
  // };

  var letterSearch = function(word) {
    return word.toLowerCase().search("t");
  };

  var isCorrectGuess = function(word) {
    var nounOne = new Guess(letterSearch(this.nounOne));
    var nounTwo = new Guess(letterSearch(this.nounTwo));
    if (nounOne < 0 && nounTwo >= 0) {
      $("#modal1").openModal();
    } else {
      $("#modal2").openModal();
    }
  };

  $(".btn-large").on("click", function() {
    return isCorrectGuess();
  });

});
