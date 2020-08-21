let pushBtn = document.querySelector(".input__plusBtn");
let submitBtn = document.querySelector(".submitBtn");
let availableBenefit = [];
$.getJSON("../static/info/benefit.json", function (data) {
  /* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ  */
  availableBenefit = data.benefit;
  data.benefit.forEach((element) => {
    availableBenefit.push(element[0]);
  });
  console.log(availableBenefit);
  pushBtn.addEventListener("click", () => {
    let newHtml = `          <div class="benefit__block">
    <input type="text" class="input__item__tag" />
    <input type="text" class="input__item__benefit" />
  </div>`;
    $(".pushblock").append(newHtml);
    $(".input__item__tag").autocomplete({
      source: availableBenefit,
      select: function (event, ui) {},
      focus: function (event, ui) {
        return false;
      },
    });
  });
  /* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ  */
  $(".input__item__tag").autocomplete({
    source: availableBenefit,
    select: function (event, ui) {},
    focus: function (event, ui) {
      return false;
    },
  });
});

/*  */

submitBtn.addEventListener("click", () => {
  let newText = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://kit.fontawesome.com/2f2669a2e9.js" crossorigin="anonymous"></script>
      <title>- Benefit1004</title>
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
      <meta property="og:title" content=" - Benefit1004" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="/static/img//.jpg" />
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
              <div class="intro__item__title intro__title">&nbsp;</div>
              <div class="intro__item__description"></div>
            </div>
            <div class="intro__item__imgs">
              <i class="fas fa-angle-left intro__item__img__left"></i>
              <img src="/static/img//_1.jpg" alt="" srcset="" class="intro__item__img__style" />
              <i class="fas fa-angle-right intro__item__img__right"></i>
            </div>
          </div>
        </div>
        <div class="intro__right">
          <div class="intro__class">
            <div class="intro__class__title intro__title">분류&nbsp;</div>
            <div class="intro__class__description intro__description"></div>
          </div>
          <div class="intro__kcal">
            <div class="intro__kcal__title intro__title">칼로리&nbsp;</div>
            <div class="intro__kcal__description intro__description"></div>
          </div>
  
          <div class="intro__benefit">
            <div class="intro__benefit__title intro__title">효능&nbsp;</div>
            <div class="intro__benefit__tags intro__description">
              <div class="intro__benefit__item tag"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="benefits">
        <div class="benefit" data-benefitnum="0">
          <div class="benefit__left">
            <div class="benefit__haeder article__header benefit__title">&nbsp;</div>
            <div class="benefit__body"></div>
          </div>
          <div class="benefit__right">
            <img src="/static/img/benefit/.jpg" class="benefit__img__style" alt="" srcset="" />
          </div>
        </div>
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
  document.querySelector(".resultArea").append(newText);
});
