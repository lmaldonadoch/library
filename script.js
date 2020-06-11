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
  delete myLibrary[book.target.attributes.data.value];
  myLibrary = myLibrary.filter((elem) => {
    elem != null;
  });

  save(myLibrary);
};

var changeReadStatus = function(book) {
  console.log(myLibrary);
  console.log(book);

  if(myLibrary[book].read == true) {
    myLibrary[book].read = false;
  } else {
    myLibrary[book].read = true;
  }
    save(myLibrary);
}

var render = function (arr, node) {
  arr.forEach((book, index) => {
    let div = document.createElement("DIV");
    let para = document.createElement("P");
    let btn = document.createElement("BUTTON");
    let btnRead = document.createElement("BUTTON");
    para.innerHTML = `${book.title} was written by ${book.author}
    and contains ${book.pages} pages.`;
    if (book.read == true) {
      para.innerHTML = para.innerHTML + " You already read this book.";
    } else {
      para.innerHTML = para.innerHTML + " You haven't read this book.";
    }
    btn.innerHTML = "Delete";
    btnRead.innerHTML = "Read";
    div.setAttribute("id", `book-${index}`);
    div.setAttribute("class", "books");
    div.appendChild(para);
    div.appendChild(btn);
    div.appendChild(btnRead);
    btn.setAttribute("id", "delete");
    btn.setAttribute("data", `${index}`);
    btn.setAttribute("class", "books-button");
    btn.setAttribute("type", "submit");
    btnRead.setAttribute("id", "read");
    btnRead.setAttribute("class", "read-button");
    btnRead.setAttribute("type", "submit");
    document.getElementById("main").appendChild(div);
  });
};

render(myLibrary, document.querySelector("#main"));

const buttons = document.getElementsByClassName("books-button");
const buttonsRead = document.getElementsByClassName("read-button");

console.log(myLibrary);

[...buttons].forEach((button) => {
  console.log(button);
  button.addEventListener("click", deleteBookFromLibrary);
});

[...buttonsRead].forEach((button) => {
  console.log(button);
  button.addEventListener("click", changeReadStatus);
});
