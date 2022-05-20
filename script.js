const myLibrary = [];

// Book constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = document.querySelector("#title").value;
    this.author = document.querySelector("#author").value;
    this.pages = document.querySelector("#pages").value;
    this.read = document.querySelector("#read").value;
  }
}

const addBookToLibrary = function (e) {
  e.preventDefault();

  let book = new Book();
  console.log(book);
  myLibrary.push(book);
  console.log(myLibrary);
};

document.querySelector(".btn").addEventListener("click", addBookToLibrary);
