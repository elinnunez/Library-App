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
            console.log("Book already in library");
            return;
        } else {
            this.lib.push(book);
        }
    }

    deleteBook(curbook) {
        this.lib = this.lib.filter((book) => {
            return book.title.toLowerCase() !== curbook.title.toLowerCase();
        });
    }

    displayBooks() {
        this.lib.forEach((book) => {
            console.log(book);
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

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book5);

console.log(library.returnLib());
library.deleteBook(book2);
console.log(library.returnLib());
console.log(library)

// console.log(library.isInLib(book1));
// console.log(library.isInLib(book3));

const container = document.querySelector(".container");
const boo = document.createElement("h1");
// boo.textContent = `${book1}`
// container.appendChild(boo);