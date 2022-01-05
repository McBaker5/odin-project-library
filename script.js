let myLibrary = [];

const libraryContainer = document.querySelector('.library-container'); // holds displays of all the book items

function Book(title, author, pages, read=false) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function() {
        let ret = `${this.title} by ${author}, ${pages} pages, `;
        return this.read ? (ret + 'read') : (ret + 'not read yet');
    }
}

function addBookToLibrary() {
    const title = prompt("Title: ");
    const author = prompt("Author: ");
    const pages = parseInt(prompt("Page count: "));
    const read = confirm("Read yet?: ");
    myLibrary.push(new Book(title, author, pages, read));
}

//// make a container in DOM to hold all the book visual items
function displayBooks() {
    // empty the library
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(container.lastChild);
    }
    // create library items to display
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        const titleHolder = document.createElement('div');
        const authorHolder = document.createElement('div');
        const pageHolder = document.createElement('div');
        const readHolder = document.createElement('div');

        titleHolder.textContent = book.title;
        authorHolder.textContent = book.author;
        pageHolder.textContent = book.pages;
        readHolder.textContent = book.read;

        bookDiv.classList.add('book');
        bookDiv.appendChild(titleHolder);
        bookDiv.appendChild(authorHolder);
        bookDiv.appendChild(pageHolder);
        bookDiv.appendChild(readHolder);

        libraryContainer.appendChild(bookDiv);
    });
}

myLibrary.push(new Book('a','b','1',true));
myLibrary.push(new Book('c','d','2',false));
myLibrary.push(new Book('e','f','3'));

displayBooks();