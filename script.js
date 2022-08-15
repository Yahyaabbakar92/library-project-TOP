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

// The function that removes a row from the table
function removeRow(e) {
  let table = document.getElementById("libraryTable");
  table.deleteRow(e.target.parentNode.rowIndex);
}

function addBookToTable() {
  // The variables that store input from the form
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  // Creating a button element and giving it an id, click event and text
  let removeButton = document.createElement("button");
  removeButton.setAttribute("id", "removeBtn");
  removeButton.innerText = "Remove Book";
  removeButton.addEventListener("click", removeRow);

  let tbody = document.querySelector("tbody");
  let tr = document.createElement("tr");
  let bookArray = [title, author, pages, read]; // The array that stores input form data

  // Using the forEach loop to create a table data cell for each input and appending the cells to the created row outside the loop
  bookArray.forEach((book) => {
    let td = document.createElement("td");
    td.innerText = book;
    tr.appendChild(td);
  });

  // Appending the removeButton to the row as well as the row to the table body
  tr.appendChild(removeButton);
  tbody.appendChild(tr);

  // console.log(myLibrary[0]);
}

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
}

let addBookButton = document.getElementById("btn");
addBookButton.addEventListener("click", addBookToLibrary);
