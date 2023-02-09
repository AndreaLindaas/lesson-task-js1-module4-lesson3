const details = document.querySelector(".details");
const idElement = document.querySelector(".id");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
idElement.innerHTML = id;

console.log(id);

const url = "https://api.noroff.dev/api/v1/books/" + id;

async function fetchBook() {
  try {
    const response = await fetch(url);
    const book = await response.json();

    console.log(book);

    details.innerHTML = `<h2>${book.title}</h2><p>${book.author}</p>`;
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetchBook();
