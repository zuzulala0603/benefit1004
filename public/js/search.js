let searchInput = document.querySelector(".searchM__input");
let availableItem = ["딸기", "딸기2", "딸기3", "바나나", "키위"];
let searchIcon = document.querySelector(".header__search__icon");
let headerSearchInput = document.querySelector(".header__search__input");

$(function () {
  $(".searchM__input").autocomplete({
    source: availableItem,
    select: function (event, ui) {
      console.log(ui.item);
    },
    focus: function (event, ui) {
      console.log("focus");
      return false;
    },
  });
});
