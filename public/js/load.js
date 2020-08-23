let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

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
let footerHtml = `      <div class="footer__copyright">
Copyright © Benefit1004 
<div>All rights reserved.</div>
</div>
<div class="footer__email">
이메일 문의 : zuzulala0603@gmail.com
</div>`;
footer.innerHTML = footerHtml;

/* menu */

let menu = document.getElementById("menu");
let menuHtml = `      <div class="menu__items">
<div class="menu__item menu__search">검색하기</div>
</div>`;
menu.innerHTML = menuHtml;

/* ad */

let adFooterBlock = document.getElementById("adBlock__footer");
let adFooterBlockScript2 = document.createElement("script");
adFooterBlockScript2.text = ` new PartnersCoupang.G({ id: 308693 });`;

adFooterBlock.appendChild(adFooterBlockScript2);

if (w < 1025) {
  adFooterBlock.style.display = "block";
  adFooterBlock.style.position = "fixed";
  adFooterBlock.style.bottom = "-5px";
} else {
  adFooterBlock.style.display = "none";
}
