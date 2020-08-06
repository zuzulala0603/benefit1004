let searchInput = document.querySelector(".searchM__input");
let availableItem = ["딸기", "딸기2", "딸기3", "바나나", "키위"];
/* searchInput.addEventListener("keyup", () => {
  let input = searchInput.value;
  console.log(input);
  $.getJSON("/static/info/item.json", function (data) {
    console.log(data);
  });
});
 */

let test = document.querySelector(".ui-menu-item");
console.log(test);

$.getJSON("/static/info/item.json", function (data) {
  console.log(data);
});

searchInput.addEventListener("focus", (e) => console.log((e.target.placeholder = "")));

$(".searchM__input").autocomplete({
  source: availableItem,
  select: function (event, ui) {},
  focus: function (event, ui) {
    return false;
    //event.preventDefault();
  },
});
