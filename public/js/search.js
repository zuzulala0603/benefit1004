let searchInput = document.querySelector(".searchM__input");

/* searchInput.addEventListener("keyup", () => {
  let input = searchInput.value;
  console.log(input);
  $.getJSON("/static/info/item.json", function (data) {
    console.log(data);
  });
});
 */
$(function () {
  var availableCity = ["서울", "부산", "대구", "광주", "울산"];

  $(".searchM__input").autocomplete({
    source: availableCity,

    select: function (event, ui) {
      console.log(ui.item);
    },

    focus: function (event, ui) {
      return false;

      //event.preventDefault();
    },
  });
});
