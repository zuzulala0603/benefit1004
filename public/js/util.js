let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
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
