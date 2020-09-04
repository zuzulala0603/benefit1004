let searchM = document.getElementById("searchM");
let searchMInput = document.querySelector(".searchM__input");
let cards = document.getElementById("cards");
let hr = document.querySelectorAll(".hr");
let cardCategory = document.querySelectorAll(".card__category");
let cardCategoryTitle = document.querySelectorAll(".card__category__title");
let carditemTitle = document.querySelectorAll(".card__item__title");
let cardItem = document.querySelectorAll(".card__item");
searchMInput.focus();
header.style.height = 0.08 * h + "px";
footer.style.marginTop = h + "px";
searchM.style.height = 0.1 * h + "px";
searchMInput.style.fontSize = 0.03 * h + "px";

hr.forEach((element) => {
  element.style.marginTop = 0.25 * h + "px";
  element.style.height = 0.07 * h + "px";
});
cardCategory.forEach((element) => {
  element.style.height = 0.3 * h + "px";
  element.style.fontSize = 0.08 * h + "px";
});
cardCategoryTitle.forEach((element) => {
  element.style.fontSize = 0.03 * h + "px";
  element.style.marginTop = 0.03 * h + "px";
});
carditemTitle.forEach((element) => {
  element.style.fontSize = 0.03 * h + "px";
});
