let menu = document.getElementById("menu");
let menuIcon = document.querySelector(".header__menu__icon");
let menuCloseIcon = document.querySelector(".menu__close__icon");
menuIcon.addEventListener("click", (e) => {
  menu.style.display = "block";
  menu.classList.add("showMenu");
  menu.classList.remove("closeMenu");
});
/* menuCloseIcon.addEventListener("click", (e) => {
  menu.classList.add("closeMenu");
  menu.classList.remove("showMenu");
  menu.addEventListener("animationend", () => {
    menu.style.display = "none";
  });
});
 */
