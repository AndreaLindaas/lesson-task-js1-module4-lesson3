const dropdown = document.querySelector("select");
const list = document.querySelector(".list");
dropdown.onchange = function () {
  console.log(event.target.value);

  let tall = event.target.value;
  list.innerHTML = "";
  for (let i = 1; i <= tall; i++) {
    list.innerHTML += `<a class="item" href="details.html?id=${i}">${i}</a>`;
  }
};
