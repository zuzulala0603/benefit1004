let pathName = window.location.pathname;
let item = window.location.pathname.split("/")[3];
/* logo */
let logo = document.querySelector(".header__logo");
logo.addEventListener("click", () => {
  window.location = "/";
});
/* benefit block */
let benefit = document.querySelectorAll(".benefit");
benefit.forEach((element) => {
  let benefitNum = element.dataset.benefitnum;
  if (benefitNum % 2 == 1) {
    element.style.flexDirection = "row-reverse";
  }
  if (w < 1025) {
    element.appendChild(element.querySelector(".benefit__body"));
  }
});

/* mobile responsive */
if (w < 1025) {
  let intro = document.getElementById("intro");
  let img = document.querySelector(".intro__item__imgs");
  intro.appendChild(img);
}

/* carousel */

let leftButton = document.querySelector(".intro__item__img__left");
let rightButton = document.querySelector(".intro__item__img__right");
let introImg = document.querySelector(".intro__item__img__style");
let carouselNum = 1;
leftButton.addEventListener("click", (e) => {
  e.preventDefault();
  carouselNum--;
  if (carouselNum == 0) {
    carouselNum = 3;
  }
  introImg.setAttribute("src", `/static/img/${item}/${item}_${carouselNum}.jpg`);
});
rightButton.addEventListener("click", (e) => {
  e.preventDefault();
  carouselNum++;
  if (carouselNum == 4) {
    carouselNum = 1;
  }
  introImg.setAttribute("src", `/static/img/${item}/${item}_${carouselNum}.jpg`);
});
