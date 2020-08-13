let searchInput = document.querySelector(".searchM__input");
let availableItem = ["딸기", "딸기2", "딸기3", "바나나", "키위"];
let searchIcon = document.querySelector(".header__search__icon");
let headerSearchInput = document.querySelector(".header__search__input");
console.log(headerSearchInput);
/* let test = document.querySelector(".ui-menu-item");
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
 */
searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  searchIcon.style.display = "none";
  headerSearchInput.style.display = "block";
  headerSearchInput.classList.add("showSearchInput");
  headerSearchInput.classList.remove("hideSearchInput");
});

document.querySelector("body").addEventListener("click", (e) => {
  if (!e.target.classList.contains("header__search__input") && !e.target.classList.contains("header__search__icon")) {
    headerSearchInput.classList.add("hideSearchInput");
    headerSearchInput.classList.remove("showSearchInput");
    document.querySelector(".hideSearchInput").addEventListener("animationend", (e) => {
      if (e.target.classList.contains("hideSearchInput")) {
        headerSearchInput.style.display = "none";
        searchIcon.style.display = "block";
      }
    });
  }
});
