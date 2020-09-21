let availableItem_ko = [];
let availableItem_en = [];
let itemCategory = [];
let currentCategoryItem = [];
let cardsItem = document.querySelector(".cards__item");
let newCardItemHtml = "";
let category = window.location.pathname.split("/")[2];
$.getJSON("../static/info/item.json", function (data) {
  data.item.forEach((element, index) => {
    availableItem_ko.push(element[0]);
    availableItem_en.push(element[1]);
    if (element[2] == category) {
      currentCategoryItem.push([element[0], element[1]]);
    }
  });
}).then(() => {
  console.log(country);
  for (let i = 0; i < currentCategoryItem.length; i++) {
    let currentItem_ko = currentCategoryItem[i][0];
    let currentItem_en = currentCategoryItem[i][1];
    if (country == "en") {
      newCardItemHtml += `<div class="card card__item" OnClick="location.href ='/ko/${category}/${currentItem_en}'"  >
        <div class="card__item__img" >
          <img src="/static/img/${currentItem_en}/${currentItem_en}_1.jpg" class="cardImg" alt="${currentItem_en}" srcset="" />
        </div>
        <div class="card__item__title">${currentItem_en}</div>
        </div>`;
    } else if (country == "ko") {
      newCardItemHtml += `<div class="card card__item" OnClick="location.href ='/ko/${category}/${currentItem_en}'"  >
        <div class="card__item__img" >
          <img src="/static/img/${currentItem_en}/${currentItem_en}_1.jpg" class="cardImg" alt="${currentItem_en}" srcset="" />
        </div>
        <div class="card__item__title">${currentItem_ko}</div>
        </div>`;
    }
  }
  cardsItem.innerHTML = newCardItemHtml;
});
