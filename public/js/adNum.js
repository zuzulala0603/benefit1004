let adFooterNum = 308693;
let adAsideNum = 309442; // food
let adAsideNum2 = 309421; // recommand
let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let item = window.location.pathname.split("/")[3];
let country = window.location.pathname.split("/")[1];
let language = window.navigator.userLanguage || window.navigator.language.split("-")[0];

/* if (country !== language) {
  window.location.href = "/en";
} */
