let benefit_ko = [];
let benefit_en = [];
let benefitDetail_ko = [];
let benefitDetail_en = [];
/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ  */
let pushBtn = document.querySelector(".input__plusBtn");
let submitBtn = document.querySelector(".submitBtn");
$.getJSON("../static/info/benefit.json", function (data) {
  /* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ  */
  /*   availableBenefit = data.benefit; */
  data.benefit.forEach((element) => {
    benefit_ko.push(element[0]);
    benefit_en.push(element[1]);
    benefitDetail_ko.push(element[2]);
    benefitDetail_en.push(element[3]);
  });

  pushBtn.addEventListener("click", () => {
    let newHtml = `          <div class="benefit__block">
    <input type="text" class="input__item__tag" />
    <hr />
    <textarea name="" id="" cols="30" rows="10" class="input__item__benefit__ko benefit"></textarea>
    <textarea name="" id="" cols="30" rows="10" class="input__item__benefit__en benefit"></textarea>
    <hr />
  </div>`;
    $(".pushblock").append(newHtml);
    $(".input__item__tag").autocomplete({
      source: benefit_ko,
      select: function (event, ui) {},
      focus: function (event, ui) {
        return false;
      },
    });
  });
  /* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ  */
  $(".input__item__tag").autocomplete({
    source: benefit_ko,
    select: function (event, ui) {},
    focus: function (event, ui) {
      return false;
    },
  });
});

/*  */

submitBtn.addEventListener("click", () => {
  let name_ko = document.querySelector(".input__item__name__ko").value;
  let name_en = document.querySelector(".input__item__name__en").value;
  let description_ko = document.querySelector(".input__item__description__ko").value;
  let description_en = document.querySelector(".input__item__description__en").value;
  let classification_ko = document.querySelector(".input__item__classification__ko").value;
  let classification_en = document.querySelector(".input__item__classification__en").value;
  let kcal = document.querySelector(".input__item__kcal").value;

  /*  */

  let benefitBody_ko = [];
  let benefitBody_en = [];
  let benefit_select_ko = [];
  let benefit_select_en = [];
  let benefitDetail_select_ko = [];
  let benefitDetail_select_en = [];
  let newTagHtml_ko = ``;
  let newBenefitHtml_ko = ``;
  let newBenefit_en = ``;

  document.querySelectorAll(".input__item__benefit__ko").forEach((element) => {
    benefitBody_ko.push(element.value);
  });
  document.querySelectorAll(".input__item__benefit__en").forEach((element) => {
    benefitBody_en.push(element.value);
  });
  document.querySelectorAll(".input__item__tag").forEach((element, index) => {
    let targetIndex = benefit_ko.indexOf(element.value);
    benefit_select_ko.push(element.value);
    benefit_select_en.push(benefit_en[targetIndex]);
    benefitDetail_select_ko.push(benefitDetail_ko[targetIndex]);
    benefitDetail_select_en.push(benefitDetail_en[targetIndex]);

    newTagHtml_ko += `<div class="intro__benefit__item tag">${benefit_select_ko[index]}</div>`;

    /*  */

    newBenefitHtml_ko += `        <div class="benefit" data-benefitnum="${index}">
    <div class="benefit__left">
      <div class="benefit__haeder article__header benefit__title">${index + 1}. ${benefitDetail_select_ko[index]}&nbsp;</div>
      <div class="benefit__body">${benefitBody_ko[index]}</div>
    </div>
    <div class="benefit__right">
      <img src="/static/img/benefit/${benefit_select_en[index]}.jpg" class="benefit__img__style" alt="${benefit_select_en[index]}" srcset="" />
    </div>
  </div>`;
  });
  console.log(newBenefitHtml_ko);
  let newText_ko = `<!DOCTYPE html>
  <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://kit.fontawesome.com/2f2669a2e9.js" crossorigin="anonymous"></script>
      <title>${name_ko} 효능, 영양 성분, 칼로리 알아보기 - Benefit1004</title>
      <!-- CSS -->
      <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/static/css/style.css" />
      <link rel="stylesheet" href="/static/css/header.css" />
      <link rel="stylesheet" href="/static/css/menu.css" />
      <link rel="stylesheet" href="/static/css/search.css" />
      <link rel="stylesheet" href="/static/css/intro.css" />
      <link rel="stylesheet" href="/static/css/benefit.css" />
      <!-- Meta -->
      <meta name="description" content="" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Benefit1004" />
      <meta property="og:title" content=" ${name_ko} 효능, 칼로리, 영양성분 알아보기 - Benefit1004" />
      <meta property="og:description" content="우리 주변에서
      쉽게 찾을 수 있는 ${name_ko} 이렇게 좋은 효능들이 있었다고?" />
      <meta property="og:image" content="/static/img/${name_en}/${name_en}_1.jpg" />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="750" />
    </head>
    <body>
      <section id="header">
        <div class="header__logo">Benefit1004</div>
        <div class="header__menu">
          <input type="text" class="header__search__input" placeholder="검색어를 입력하세요." />
          <i class="fas fa-search header__search__icon"></i>
          <i class="fas fa-bars header__menu__icon"></i>
        </div>
      </section>
      <section id="menu" class="menu">
        <div class="menu__items">
          <div class="menu__item menu__search">검색하기</div>
        </div>
      </section>
      <section id="intro">
        <div class="intro__left">
          <div class="intro__item">
            <div class="intro__item__box">
              <div class="intro__item__title intro__title">${name_ko}&nbsp;</div>
              <div class="intro__item__description">${description_ko}</div>
            </div>
            <div class="intro__item__imgs">
              <i class="fas fa-angle-left intro__item__img__left"></i>
              <img src="/static/img/${name_en}/${name_en}_1.jpg" alt="${name_en}" srcset="" class="intro__item__img__style" />
              <i class="fas fa-angle-right intro__item__img__right"></i>
            </div>
          </div>
        </div>
        <div class="intro__right">
          <div class="intro__class">
            <div class="intro__class__title intro__title">분류&nbsp;</div>
            <div class="intro__class__description intro__description">${classification_ko}</div>
          </div>
          <div class="intro__kcal">
            <div class="intro__kcal__title intro__title">칼로리&nbsp;</div>
            <div class="intro__kcal__description intro__description">100g 당 ${kcal} Kcal</div>
          </div>
  
          <div class="intro__benefit">
            <div class="intro__benefit__title intro__title">효능&nbsp;</div>
            <div class="intro__benefit__tags intro__description">
             ${newTagHtml_ko}
            </div>
          </div>
        </div>
      </section>
      <section id="benefits">
     ${newBenefitHtml_ko}
        <!--  -->
      </section>
      <section id="search"></section>
      <section id="footer"></section>
  
      <!--  -->
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
      <script src="/static/js/menu.js"></script>
      <script src="/static/js/util.js"></script>
      <script src="/static/js/search.js"></script>
    </body>
  </html>
  `;
  document.querySelector(".resultArea_ko").append(newText_ko);
});