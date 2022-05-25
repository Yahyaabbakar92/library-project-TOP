const button = document.querySelector(".btn");
const tableBody = document.querySelector("tbody");
const myLibrary = [];

// The constructor function
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  // E.g of how a method is written in a constructor
  // info() {
  //   return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  // }
}

// The function to add books to the array myLibrary
const addBookToLibrary = function (e) {
  e.preventDefault(); // Prevent's the form from submitting

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  // The variable that creates a book object
  let book = new Book(title, author, pages, read);

  // The method to move the objects into the array
  myLibrary.push(book);

  // Clears the form for the next entries
  document.querySelector("form").reset();
};

const displayBooksToTable = function () {
  let tableRow = document.createElement("tr");
  let deleteButton = document.createElement("button");
  // let editButton = document.createElement("button");

  deleteButton.className = "delete";
  deleteButton.innerText = "Delete";
  // editButton.className = "toggle";
  // editButton.innerText = "Edit";
  myLibrary.forEach((newBook, index) => {
    tableRow.innerHTML = `<td>${newBook.title}</td>
                          <td>${newBook.author}</td>
                          <td>${newBook.pages}</td>
                          <td>${newBook.read}</td>`;
    tableRow.setAttribute("data-book", index);
    tableRow.appendChild(deleteButton);
    // tableRow.appendChild(editButton);
  });

  tableBody.appendChild(tableRow);

  // The event listener to delete a row from the table
  deleteButton.addEventListener("click", removeBookFromLibrary);
};

const removeBookFromLibrary = function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
  // The function to remove the book from the array
  myLibrary.splice(e.target.parentElement.dataset, 1);
};

// The event listener to add and display a book to the table
button.addEventListener("click", (e) => {
  addBookToLibrary(e);
  displayBooksToTable();
});
