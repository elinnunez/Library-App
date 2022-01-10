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
    if (this.isInLib(book)) {
    //   console.log(`Book: ${book.title} already in library`);
      return;
    } else {
      this.lib.push(book);
    }
  }

  deleteBook(curbook) {
    this.lib = this.lib.filter((book) => {
      return book.title.toLowerCase() !== curbook.title.toLowerCase();
    });
    // console.log(this.lib);
  }

  displayBooks() {
    this.lib.forEach((book) => {
      createCard(book);
    });
  }

  isInLib(curbook) {
    const found = this.lib.some((book) => {
      return book.title.toLowerCase() === curbook.title.toLowerCase();
    });

    if (found) {
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
// library.addBook(book4);
// library.addBook(book5);
// library.addBook(book6);

// console.log(library.returnLib());
// console.log(library);

// console.log(library.isInLib(book1));
// console.log(library.isInLib(book3));

const container = document.querySelector(".container");
const libGrid = document.querySelector(".lib-grid");
const addCard = document.querySelector(".add-card");

const addBookBtn = document.querySelector(".add-book");
const formModal = document.querySelector(".popup");
const form = document.querySelector("form");
const closeFormBtn = document.querySelector(".modal_close");
const toggleRead = document.querySelector(".toggle-read");

// Form Functionality

const resetForm = () => {
  for (let i = 0; i < 3; i++) {
    form.elements[i].value = "";
  }
  form.elements[3].value = "Unread";
  toggleRead.style.backgroundColor = "#f07171";
};

form.addEventListener("submit", (e) => {
  let values = [];
  for (let i = 0; i < form.elements.length - 1; i++) {
    values.push(form.elements[i].value);
  }

  resetForm();

  if (values[3] === "Unread") {
    values[3] = false;
  } else {
    values[3] = true;
  }

  for(let i = 0; i < values.length; i++) {
      if(values[i] == "") {
          values[i] = "N/A";
      }
  }

  let newbook = new Book(values[0], values[1], values[2], values[3]);

  if (library.isInLib(newbook) == false) {
    library.addBook(newbook);
    createCard(newbook);
  }

//   console.log(values);
//   console.log(library.lib);

  formModal.style.display = "none";
  e.preventDefault();
});

addBookBtn.addEventListener("click", () => {
  formModal.style.display = "block";
});

addCard.addEventListener("click", () => {
  formModal.style.display = "block";
});

closeFormBtn.addEventListener("click", (e) => {
  resetForm();
  formModal.style.display = "none";
});

toggleRead.addEventListener("click", (e) => {
  let curval = e.target.value;
//   console.log(curval);

  if (curval === "Unread") {
    e.target.value = "Read";
    e.target.style.backgroundColor = "#4caf50";
  } else if (curval === "Read") {
    e.target.value = "Unread";
    e.target.style.backgroundColor = "#f07171";
  }

  e.preventDefault();
});

const createCard = (curbook) => {
  const card = document.createElement("div");
  card.classList.add("book-card");

  const title = document.createElement("h1");
  title.classList.add("book-title");
  title.textContent = `${curbook.title}`;
  card.appendChild(title);

  const author = document.createElement("h2");
  author.classList.add("book-author");
  author.textContent = `${curbook.author}`;
  card.appendChild(author);

  const pages = document.createElement("h2");
  pages.classList.add("book-pages");
  pages.textContent = `Pages: ${curbook.pages}`;
  card.appendChild(pages);


  const isreadBtn = document.createElement("button");
  isreadBtn.classList.add("book-read");

  if (curbook.read) {
    isreadBtn.textContent = "Completed";
    isreadBtn.style.backgroundColor = "rgb(176, 238, 190)";
  } else {
    isreadBtn.textContent = "Incomplete";
    isreadBtn.style.backgroundColor = "rgb(238, 183, 176)";
  };

  isreadBtn.addEventListener("click", (e) => {
      if(curbook.read === true) {
          isreadBtn.textContent = "Incomplete";
          curbook.read = false;
          isreadBtn.style.backgroundColor = "rgb(238, 183, 176)";
      } else {
          isreadBtn.textContent = "Completed";
          curbook.read = true;
          isreadBtn.style.backgroundColor = "rgb(176, 238, 190)";
      };
  });

  card.appendChild(isreadBtn);

  const rmBtn = document.createElement("button");
  rmBtn.classList.add("rm-card");
  rmBtn.textContent = "REMOVE";
  rmBtn.addEventListener("click", (e) => {
    let curCard = e.target.parentNode;
    let parentGrid = e.target.parentNode.parentNode;
    // console.log(parentGrid);
    let bChIndex = Array.from(parentGrid.children).indexOf(curCard);
    // console.log(bChIndex);
    library.deleteBook(library.lib[bChIndex]);

    e.target.parentNode.parentNode.removeChild(curCard);
  });

  card.appendChild(rmBtn);

  libGrid.insertBefore(card, addCard);
};

book1.read = false;

// const inputBook = () => {

// }

library.displayBooks();
// library.deleteBook(book2);
// library.displayBooks();
