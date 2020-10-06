let searchInput = document.querySelector(".searchInput");
let searchIcon = document.querySelector(".header__search__icon");
let headerSearchInput = document.querySelector(".header__search__input");
let icon = document.querySelector(".icon__block");

$(function () {
  $(".searchInput").autocomplete({
    source: availableItem_en,
    select: function (event, ui) {
      let seletItem = ui.item.value;

      goToTargetLink(seletItem);
    },
    focus: function (event, ui) {
      return false;
    },
  });
});
icon.addEventListener("click", () => {
  let inputValue = searchInput.value;
  if (availableItem_en.includes(inputValue)) {
    goToTargetLink(inputValue);
  } else {
    Swal.fire({
      position: "top",
      icon: "error",
      title: `Sorry.`,
      text: `Result is empty`,
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
    if (availableItem_en.includes(inputValue)) {
      goToTargetLink(inputValue);
    } else {
      Swal.fire({
        position: "top",
        icon: "error",
        title: `Sorry.`,
        text: `Result is empty`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}

function goToTargetLink(targetItem) {
  let currentItemCategory = itemCategory[availableItem_en.indexOf(targetItem)];

  location.href = `/en/${currentItemCategory}/${targetItem}`;
}
