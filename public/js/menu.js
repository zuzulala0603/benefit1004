let menuIcon = document.querySelector(".header__menu__icon");
let menuCloseIcon = document.querySelector(".menu__close__icon");
menuIcon.addEventListener("click", (e) => {
  menu.style.display = "block";
  menu.classList.add("showMenu");
  menu.classList.remove("closeMenu");
});

document.querySelector("body").addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("menu") &&
    !e.target.classList.contains("header__menu__icon") &&
    !e.target.classList.contains("menu__items") &&
    !e.target.classList.contains("menu__item") &&
    menu.classList.contains("showMenu")
  ) {
    menu.classList.add("closeMenu");
    menu.classList.remove("showMenu");
    console.log("닫힘");
    console.log(e.target);
  }
});
