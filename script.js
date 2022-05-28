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

  changeReadStatus() {
    if (this.read === true) {
      const read = document.querySelector("#read");
      read.setAttribute("checked", false);
      // console.log(read.checked);
    } else {
      read.setAttribute("checked", true);
      // console.log(read.checked);
    }
  }
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
  let deleteCell = document.createElement("td");
  let toggleButton = document.createElement("button");
  let toggleCell = document.createElement("td");

  deleteButton.className = "delete";
  deleteButton.innerText = "Delete";
  toggleButton.className = "toggle";
  toggleButton.innerText = "Toggle";
  myLibrary.forEach((newBook, index) => {
    tableRow.innerHTML = `<td>${newBook.title}</td>
                          <td>${newBook.author}</td>
                          <td>${newBook.pages}</td>
                          <td>${newBook.read}</td>`;
    tableRow.setAttribute("data-book", index);
    tableRow.appendChild(deleteCell);
    deleteCell.appendChild(deleteButton);
    tableRow.appendChild(toggleCell);
    toggleCell.appendChild(toggleButton);
  });

  tableBody.appendChild(tableRow);

  // The event listener to delete a row from the table
  deleteButton.addEventListener("click", removeBookFromLibrary);
  toggleButton.addEventListener("click", () => {
    let books = new Book(title, author, pages, read);
    return books.changeReadStatus();
  });
};

// Need to fix the functionality to remove the correct book from the array
const removeBookFromLibrary = function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
    // console.log(e.target.parentElement.parentElement.dataset);
  }
  // The function to remove the book from the array
  myLibrary.splice(e.target.parentElement.parentElement.dataset, 1);
  // console.log(myLibrary);
};

// The event listener to add and display a book to the table
button.addEventListener("click", (e) => {
  addBookToLibrary(e);
  displayBooksToTable();
});
