$(document).ready(function () {
  $(".parallax").parallax();

  $("#guess-one").focus();

  const Entry = function(word) {
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

    const guessOne = new Entry($("#guess-one").val()).hasT();
    const guessTwo = new Entry($("#guess-two").val()).hasT();

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
