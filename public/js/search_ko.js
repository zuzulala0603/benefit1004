let searchInput = document.querySelector(".searchInput");
let searchIcon = document.querySelector(".header__search__icon");
let headerSearchInput = document.querySelector(".header__search__input");
let icon = document.querySelector(".icon__block");

$(function () {
  $(".searchInput").autocomplete({
    source: availableItem_ko,
    select: function (event, ui) {
      let seletItem = ui.item.value;
      let itemLink = availableItem_en[availableItem_ko.indexOf(seletItem)];
      goToTargetLink(itemLink);
    },
    focus: function (event, ui) {
      return false;
    },
  });
});
icon.addEventListener("click", () => {
  let inputValue = searchInput.value;
  if (availableItem_ko.includes(inputValue)) {
    goToTargetLink(availableItem_en[availableItem_ko.indexOf(inputValue)]);
  } else {
    Swal.fire({
      position: "top",
      icon: "error",
      title: `죄송합니다.`,
      text: `검색결과가 존재하지 않습니다.`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
});
document.addEventListener("keydown", () => {
  enterkey();
});

function enterkey() {
  if (window.event.keyCode == 13) {
    let inputValue = searchInput.value;
    if (availableItem_ko.includes(inputValue)) {
      goToTargetLink(availableItem_en[availableItem_ko.indexOf(inputValue)]);
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: `죄송합니다.`,
        text: `검색결과가 존재하지 않습니다.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}

function goToTargetLink(targetItem) {
  let currentItemCategory = itemCategory[availableItem_en.indexOf(targetItem)];

  location.href = `/ko/${currentItemCategory}/${targetItem}`;
}
