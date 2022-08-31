# Library Project

Library project for theodinproject.com

Live: ( )

Date started: July 28, 2022
Date completed:

## Objectives

Using objects and object constructors to organize code and create a library app

## Screenshot

## Things I learned

- Using built-in methods that can delete rows (deleteRow) from tables and return an index row (rowIndex) of a table
- When creating a button element and want to append to a table row, append it first to a table cell (td) and then the table cell to the row, that way it becomes part of the cell of the table row
- Keep in mind that "==" or "===" is not what you use when changing values. "=" is used to set values if you're using innerText property
- To initialize an objects prototype or any object method in a function, you instantiate the object in that same function
- You can give a class attribute to a cell on a table by accessing the row's children property and using a zero based index (.children[i])
- The parentNode property returns the parent element of the accessed element

## Thought process

After filling out the info on the form, when the "Add Book" button is clicked A table will be displayed on the window.
The table will show the the title, author, number of pages, whether the book has been read and a button to delete the book from
the table.

- After the form is filled, clicking the add book button adds a new row below to the displayed header of the table
- Clicking remove book will remove the row from the table
- Clicking toggle status will switch the read value of the row it was clicked

- if element contains ???x

## Need to Refactor

- I was able to get the toggle button to change the book status. However, it only works when clicked once and doesn't have any effect on a second click. Also it works after one book is added and the button is clicked after the book is added. If multiple books are added, then the toggle button only changes status of the last book added and not any other book.

- I also have to style my radio inputs and make the app responsive
