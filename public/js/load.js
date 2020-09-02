/* header */

let header = document.getElementById("header");
let headerHtml = `      <div class="header__logo">Benefit1004</div>
<div class="header__menu">
  <input type="text" class="header__search__input" placeholder="검색어를 입력하세요." />
  <i class="fas fa-search header__search__icon"></i>
  <i class="fas fa-bars header__menu__icon"></i>
</div>`;
header.innerHTML = headerHtml;

/* footer */

let footer = document.getElementById("footer");
let footerHtml;
if (country == "ko") {
  footerHtml = `<div class="footer__copyright">
Copyright © Benefit1004 
<div>All rights reserved.</div>
</div>
<div class="footer__email">
이메일 문의 : zuzulala0603@gmail.com
</div>`;
} else if (country == "en") {
  footerHtml = `<div class="footer__copyright">
Copyright © Benefit1004 
<div>All rights reserved.</div>
</div>
<div class="footer__email">
Contact : zuzulala0603@gmail.com
</div>`;
}
footer.innerHTML = footerHtml;

/* menu */

let menu = document.getElementById("menu");
let menuHtml = `      <div class="menu__items">
<div class="menu__item menu__search">검색하기</div>
</div>`;
menu.innerHTML = menuHtml;

/* recommand */

let category = document.querySelector(".intro__class__description").innerHTML;
console.log(category);
