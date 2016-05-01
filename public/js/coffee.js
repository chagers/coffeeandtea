$(document).ready(function () {
  $(".parallax").parallax();

  var Entry = function(word) {
    this.word = word;
  };

  Entry.prototype.hasT = function () {
    if(this.word.search("t") >= 0) {
      return true;
    } else {
      return false;
    }
  };

  $(".btn-large").on("click", function() {
    var guessOne = new Entry($("#guess-one").val()).hasT();
    var guessTwo = new Entry($("#guess-two").val()).hasT();
    if (guessOne === false && guessTwo === true) {
      $("#modal1").openModal();
      $("#guess-one, #guess-two").val("");
    } else {
      $("#modal2").openModal();
      $("#guess-one, #guess-two").val("");
    }
  });

});
