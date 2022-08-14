let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToTable() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  let tbody = document.querySelector("tbody");
  let tr = document.createElement("tr");
  let bookArray = [title, author, pages, read];

  bookArray.forEach((book) => {
    let td = document.createElement("td");
    td.innerText = book;
    tr.appendChild(td);
  });

  tbody.appendChild(tr);
}

function addBookToLibrary(e) {
  // The preventDefault() method here cancels the form from being submitted
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  console.log(myLibrary);
  addBookToTable();
}

let addBookButton = document.getElementById("btn");
addBookButton.addEventListener("click", addBookToLibrary);
