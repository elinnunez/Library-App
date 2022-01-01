class Book {
    constructor(title = "", author = "", pages = 0, read = false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.lib = [];
    }

    returnLib() {
        return this.lib;
    }

    addBook(book) {
        if(this.isInLib(book)) {
            console.log(`Book: ${book.title} already in library`);
            return;
        } else {
            this.lib.push(book);
        }
    }

    deleteBook(curbook) {
        this.lib = this.lib.filter((book) => {
            return book.title.toLowerCase() !== curbook.title.toLowerCase();
        });
        libGrid.innerHTML = "";
        console.log(this.lib);
    }

    displayBooks() {
        this.lib.forEach((book) => {
            createCard(book);
        })
    }

    isInLib(curbook) {
        const found = this.lib.some((book) => {
            return book.title.toLowerCase() === curbook.title.toLowerCase();
        });

        if(found) {
            return true;
        } else {
            return false;
        }
    }
}

const library = new Library();

let book1 = new Book("Eragon", "Christopher Paolini", 700, true);
let book2 = new Book("The Lightning Thief", "Rick Riordan", 600, false);
let book3 = new Book("The DaVinci Code", "Dan Brown", 800, true);
let book4 = new Book("eragon", "christopher Paolini", 700, true);
let book5 = new Book();
let book6 = new Book();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);

console.log(library.returnLib());
console.log(library)

// console.log(library.isInLib(book1));
// console.log(library.isInLib(book3));

const container = document.querySelector(".container");
const libGrid = document.querySelector(".lib-grid");

const createCard = (curbook) => {
    const card = document.createElement("div")
    card.classList.add("book-card");

    const title = document.createElement("h2");
    title.classList.add("book-title");
    title.textContent = `Title: ${curbook.title}`;
    card.appendChild(title);

    const author = document.createElement("h2");
    author.classList.add("book-author");
    author.textContent = `Author: ${curbook.author}`;
    card.appendChild(author);

    const pages = document.createElement("h2");
    pages.classList.add("book-pages");
    pages.textContent = `Pages: ${curbook.pages}`;
    card.appendChild(pages);

    const isread = document.createElement("h2");
    isread.classList.add("book-read");
    isread.textContent = `Completed: ${curbook.read}`;
    card.appendChild(isread);

    libGrid.appendChild(card);
}

library.displayBooks();
// library.deleteBook(book2);
// library.displayBooks();