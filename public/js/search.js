let searchInput = document.querySelector(".searchM__input");

searchInput.addEventListener("keyup", () => {
  let input = searchInput.value;
  console.log(input);
  $.getJSON("/static/info/item.json", function (data) {
    console.log(data);
  });
});
