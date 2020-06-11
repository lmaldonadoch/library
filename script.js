let myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
if (myLibrary) {
  console.log(myLibrary);
} else {
  myLibrary = [];
}

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  // do stuff here
  form = document.getElementById("addbook");
  newBook = new Book(
    form[0].value,
    form[1].value,
    form[2].value,
    form[3].checked
  );
  myLibrary.push(newBook);
  save(myLibrary);
}

function showForm() {
  var addBook = document.getElementById("addbook");
  if (addBook.style.display == "none") {
    addBook.style.display = "flex";
  } else {
    addBook.style.display = "none";
  }
}

var save = function (array) {
  localStorage.setItem("myLibrary", JSON.stringify(array));
};

var deleteBookFromLibrary = function (book) {
  delete myLibrary[book];
  myLibrary = myLibrary.filter((elem) => {
    elem != null;
  });

  save(myLibrary);
};

var render = function (arr, node) {
  arr.forEach((book, index) => {
    let div = document.createElement("DIV");
    let para = document.createElement("P");
    let btn = document.createElement("BUTTON");
    para.innerHTML = `${book.title} was written by ${book.author}
    and contains ${book.pages} pages.`;
    if (book.read == true) {
      para.innerHTML = para.innerHTML + " You already read this book.";
    } else {
      para.innerHTML = para.innerHTML + " You haven't read this book.";
    }
    btn.innerHTML = "Delete";
    div.setAttribute("id", `book-${index}`);
    div.setAttribute("class", "books");
    div.appendChild(para);
    div.appendChild(btn);
    btn.setAttribute("id", "delete");
    btn.setAttribute("data", `${index}`);
    btn.setAttribute("class", "books-button");
    // btn.addEventListener("click", deleteBookFromLibrary(div));
    document.getElementById("main").appendChild(div);
  });
};

render(myLibrary, document.querySelector("#main"));

const buttons = document.getElementsByClassName("books-button");

console.log(buttons);

[...buttons].forEach((button) => {
  console.log(button);
  button.addEventListener("click", deleteBookFromLibrary);
});
