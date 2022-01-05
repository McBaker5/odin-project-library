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

const hoop = new Book('dumpie', 'dougie', 234, true);
console.log(hoop.info());