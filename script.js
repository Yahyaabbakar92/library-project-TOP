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
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerText = "Delete";
  myLibrary.forEach((newBook, index) => {
    tableRow.innerHTML = `<td>${newBook.title}</td>
                          <td>${newBook.author}</td>
                          <td>${newBook.pages}</td>
                          <td>${newBook.read}</td>`;
    tableRow.setAttribute("data-book", index);
    tableRow.appendChild(deleteBtn);
  });

  tableBody.appendChild(tableRow);
  deleteBtn.addEventListener("click", (e) => {
    console.log(e);
  });
};

const removeBookFromLibrary = function () {};

// The event listener
button.addEventListener("click", (e) => {
  addBookToLibrary(e);
  displayBooksToTable();
});

{
  /* <td><button class="removeBtn">Remove<button></td>
                          <td><button class="toggle">Edit<button></td> */
}
