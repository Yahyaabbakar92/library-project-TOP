let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleStatus = function () {
  let readStatus = document.querySelectorAll(".readStatus");

  for (const bookStatus of readStatus) {
    if (bookStatus.innerText === "Not Read") {
      bookStatus.innerText = "Read";
    } else if (bookStatus.innerText === "Read") {
      bookStatus.innerText = "Not Read";
    }
  }
};

function addBookToLibrary(e) {
  // The preventDefault() method here cancels the form from being submitted
  e.preventDefault();

  // Storing the values of the input form
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  // Instantiating a book using the values from the form
  let newBook = new Book(title, author, pages, read);

  // Adding each book object to the myLibrary array
  myLibrary.push(newBook);

  // Invoking the function that creates a row and adds it to the table
  addBookToTable();
  // newBook.toggleStatus();
}

// The function that adds a book row to the table
function addBookToTable() {
  // The variables that store input from the form
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  // Instantiating a book
  let newBook = new Book(title, author, pages, read);

  // Creating a remove/delete book button and a table cell for it. Giving a class to the button and adding an event listener to the button
  let removeButton = document.createElement("button");
  let removeButtonCell = document.createElement("td");
  removeButton.setAttribute("class", "removeBtn");
  removeButton.innerText = "Remove Book";
  removeButton.addEventListener("click", removeRow);

  // Creating a toggle read status button and a table cell for it. Adding a class, inner text value and an event listener to the button.
  let toggleButton = document.createElement("button");
  let toggleButtonCell = document.createElement("td");
  toggleButton.setAttribute("class", "toggle");
  toggleButton.innerText = "Toggle Status";
  toggleButton.addEventListener("click", newBook.toggleStatus);

  let tbody = document.querySelector("tbody");
  let tr = document.createElement("tr"); // Creating the row for the table body
  let bookArray = [title, author, pages, read]; // The array that stores input form data

  // Using the forEach loop to create a table data cell for each input and appending the cells to the created row outside the loop
  bookArray.forEach((book) => {
    let td = document.createElement("td");
    td.innerText = book;
    tr.appendChild(td);
  });

  // Appending the removeButton and toggleButton to the td and row. As well as the row to the table body
  removeButtonCell.appendChild(removeButton);
  toggleButtonCell.appendChild(toggleButton);
  tr.appendChild(removeButtonCell);
  tr.appendChild(toggleButtonCell);
  tbody.appendChild(tr);

  tr.children[3].setAttribute("class", "readStatus"); // Giving a class attribute to the table data that contains info on whether the book is read or not.
}

// The function that removes a row from the table
function removeRow(e) {
  let table = document.getElementById("libraryTable");
  table.deleteRow(e.target.parentNode.parentNode.rowIndex);
}

let addBookButton = document.getElementById("btn");
addBookButton.addEventListener("click", addBookToLibrary);
