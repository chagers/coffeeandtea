$(document).ready(function () {
  $(".parallax").parallax();

  $("#guess-one").focus();

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

  $("button").on("click", function() {

    var guessOne = new Entry($("#guess-one").val()).hasT();
    var guessTwo = new Entry($("#guess-two").val()).hasT();

    if (guessOne === false && guessTwo === true) {
      $("#modal1").openModal();
      $("#guess-one, #guess-two").val("");
    } else {
      $("#modal2").openModal();
      $("#guess-one, #guess-two").val("");
    }

    $("#modal1, #modal2").on("click", function() {
      $("#guess-one").focus();
    });
  });

});
