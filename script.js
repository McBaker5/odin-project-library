let myLibrary = [];

const libraryContainer = document.querySelector('.library-container'); // holds displays of all the book items
const submitButton = document.querySelector('.submit');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const pagesInput = document.querySelector('.pages');
const readInput = document.querySelector('.read');
const addButton = document.querySelector('.add-button');
const modal = document.querySelector('.modal');
const span = document.querySelector('.close');

submitButton.addEventListener('click', submitBook);
addButton.addEventListener('click', () => {
    modal.style.display = 'block';
})
span.addEventListener('click', closeModal);

class Book {
    constructor(title, author, pages, read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    };
    info = function() {
        let ret = `${this.title} by ${author}, ${pages} pages, `;
        return this.read ? (ret + 'read') : (ret + 'not read yet');
    };
    toggleRead = function() {
        this.read = !this.read;
    }
}

function closeModal() {
    modal.style.display = 'none';
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;
}

//// make a container in DOM to hold all the book visual items
function displayBooks() {
    // empty the library
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.lastChild);
    }
    // create library items to display
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        const titleHolder = document.createElement('div');
        const authorHolder = document.createElement('div');
        const pageHolder = document.createElement('div');
        const readHolder = document.createElement('div');
        const readButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        titleHolder.textContent = book.title;
        authorHolder.textContent = book.author;
        pageHolder.textContent = book.pages;
        readHolder.textContent = book.read;
        readButton.textContent = 'toggle read';
        deleteButton.textContent = 'Delete';

        bookDiv.dataset.index = myLibrary.indexOf(book);
        readButton.addEventListener('click', () => {
            book.toggleRead();
            readHolder.textContent = book.read;
        })
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(bookDiv.dataset.index, 1);
            displayBooks();
        });

        bookDiv.classList.add('book');
        bookDiv.appendChild(titleHolder);
        bookDiv.appendChild(authorHolder);
        bookDiv.appendChild(pageHolder);
        bookDiv.appendChild(readHolder);
        bookDiv.appendChild(readButton);
        bookDiv.appendChild(deleteButton);

        libraryContainer.appendChild(bookDiv);
    });
}

function submitBook() {
    const book = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
    myLibrary.push(book);
    displayBooks();
    closeModal();
}

myLibrary.push(new Book('Dracula','Bram Stoker','458',true));
myLibrary.push(new Book('Interview With The Vampire','Anne Rice','350',false));
myLibrary.push(new Book('Antigone','Sophocles','95',false));

displayBooks();