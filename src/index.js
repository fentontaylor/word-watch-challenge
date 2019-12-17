import $ from 'jquery'

$(document).ready(() => {
  function displayTopWord() {
    $.ajax({
      url: "https://wordwatch-api.herokuapp.com/api/v1/top_word",
      context: document.body,
      success: (res) => {
        let top_word = Object.keys(res.word)[0]
        let count = Object.values(res.word)[0]
        $('.word-count').html(`${top_word}: ${count}`)
      }
    });
  }
  
  displayTopWord();

  $("button").click(() => {
    let text = document.getElementsByTagName('textarea')[0].value
    let words = text.split(' ')
    words.forEach(w => {
      $.ajax({
        url: "https://wordwatch-api.herokuapp.com/api/v1/words",
        type: 'POST',
        data: { word: { value: w } }
      });
    });
    displayTopWord();
  });
})
