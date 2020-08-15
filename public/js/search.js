let searchInput = document.querySelector(".searchM__input");
let availableItem = ["딸기", "딸기2", "딸기3", "바나나", "키위"];
let searchIcon = document.querySelector(".header__search__icon");
let headerSearchInput = document.querySelector(".header__search__input");

if (w > 1024) {
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
} else {
}
