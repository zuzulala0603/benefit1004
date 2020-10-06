let availableItem_ko = [];
let availableItem_en = [];

let cardsItem = document.querySelector(".cards__item");
let newCardItemHtml = "";
$.getJSON("../static/info/item.json", function (data) {
  data.item.forEach((element, index) => {
    availableItem_ko.push(element[0]);
    availableItem_en.push(element[1]);
    itemCategory.push(element[2]);
  });
}).then(() => {
  for (let i = 0; i < 6; i++) {
    let currentItem_ko = availableItem_ko[availableItem_ko.length - i - 1];
    let currentItem_en = availableItem_en[availableItem_en.length - i - 1];
    let currentCategory = itemCategory[itemCategory.length - i - 1];
    if (country == "en") {
      newCardItemHtml += `<div class="card card__item" OnClick="location.href ='/en/${currentCategory}/${currentItem_en}'"  >
      <div class="card__item__img" >
        <img src="/static/img/${currentItem_en}/${currentItem_en}_1.jpg" class="cardImg" alt="${currentItem_en}" srcset="" />
      </div>
      <div class="card__item__title">${currentItem_en}</div>
      </div>`;
    } else {
      newCardItemHtml += `<div class="card card__item" OnClick="location.href ='/ko/${currentCategory}/${currentItem_en}'"  >
      <div class="card__item__img" >
        <img src="/static/img/${currentItem_en}/${currentItem_en}_1.jpg" class="cardImg" alt="${currentItem_en}" srcset="" />
      </div>
      <div class="card__item__title">${currentItem_ko}</div>
      </div>`;
    }
  }
  cardsItem.innerHTML = newCardItemHtml;
});
