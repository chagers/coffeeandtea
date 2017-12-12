$(document).ready(() => {
  $('.parallax').parallax();
  $('#guess-one').focus();

  class Entry {
    constructor(word) {
      this.word = word;
    }
    hasT() {
      if (this.word.search('t') >= 0) {
        return true;
      }
      return false;
    }
  }

  let winCount = 0;
  const clearGuesses = () => $('#guess-one, #guess-two').val(''),
        winGame = (wins) => {
          if (wins > 4) {
            return true;
          }
          return false;
        };

  $('#submit-guess').click(() => {
    const guessOne = new Entry($('#guess-one').val()),
          guessTwo = new Entry($('#guess-two').val());

    if (!guessOne.hasT() && guessTwo.hasT()) {
      winCount++;
      $('#win').openModal();
    } else {
      winCount > 0 ? winCount-- : winCount;
      $('#lose').openModal();
    }
    $('.modal-close').focus();
    clearGuesses();
    winGame(winCount);
  });

  $('.modal-close').click(() => $('#guess-one').focus());

});
