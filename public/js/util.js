/* logo */
let logo = document.querySelector(".header__logo");
logo.addEventListener("click", () => {
  window.location = "/";
});
/* benefit block */
let benefit = document.querySelectorAll(".benefit");
benefit.forEach((element) => {
  let benefitNum = element.dataset.benefitnum;
  console.log(benefitNum);
  if (benefitNum % 2 == 1) {
    element.style.flexDirection = "row-reverse";
  }
});

/* mobile responsive */
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if (w < 1025) {
  let intro = document.getElementById("intro");
  let img = document.querySelector(".intro__item__imgs");
  console.log(img);
  console.log(intro);
  intro.appendChild(img);
}
