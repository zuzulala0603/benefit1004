let availableItem_ko = [];
let availableItem_en = [];
let lastItem_ko = "";
let lastItem_en = "";
let cardsItem = document.querySelector(".cards__item");
let newCardItemHtml = "";
$.getJSON("../static/info/item.json", function (data) {
  data.item.forEach((element, index) => {
    availableItem_ko.push(element[0]);
    availableItem_en.push(element[1]);
  });
}).then(() => {
  for (let i = 0; i < 5; i++) {
    lastItem_ko = availableItem_ko[availableItem_ko.length - i - 1];
    lastItem_en = availableItem_en[availableItem_en.length - i - 1];
    newCardItemHtml += `<div class="card card__item" OnClick="location.href ='https://www.benefit1004.com/ko/item/${lastItem_en}'"  >
        <div class="card__item__img" >
          <img src="/static/img/${lastItem_en}/${lastItem_en}_1.jpg" class="cardImg" alt="${lastItem_en}" srcset="" />
        </div>
        <div class="card__item__title">${lastItem_ko}</div>
        </div>`;
  }
  cardsItem.innerHTML = newCardItemHtml;
});
