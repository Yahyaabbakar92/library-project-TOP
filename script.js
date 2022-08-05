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

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", "376", "Read");
// const harryPotter = new Book(
//   "The philosopher's stone",
//   "J.K. Rowling",
//   "657",
//   "Not read"
// );
// const atomicHabits = new Book("Atomic Habits", "James Clear", "128", "Read");

function addBookToLibrary(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  console.log(myLibrary);
}

function displayBook() {
  myLibrary.forEach((book) => {
    console.log(book);
    addBookToLibrary();
  });
}

let button = document.getElementById("btn");
button.addEventListener("click", addBookToLibrary);
