import $ from 'jquery'

$(document).ready(() => {
  $.ajax({
    url: "https://wordwatch-api.herokuapp.com/api/v1/top_word",
    context: document.body,
    success: (res) => {
      let top_word = Object.keys(res.word)[0]
      let count = Object.values(res.word)[0]
      $('.word-count').html(`${top_word}: ${count}`)
    }
  });
})
