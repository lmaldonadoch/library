let myLibrary = ["The Lord of the Rings", "HP", "Narnia"];

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary() {
  // do stuff here
  var addBook = document.getElementById("addbook");
  if (addBook.style.display == "none") {
    addBook.style.display = "flex";
  } else {
    addBook.style.display = "none";
  }
}

function deleteBookFromLibrary(bookId) {
  bookId = bookId.id;
  console.log(bookId);
}

var render = function (arr, node) {
  arr.forEach((book, index) => {
    let div = document.createElement("DIV");
    let para = document.createElement("P");
    let btn = document.createElement("BUTTON");
    para.innerHTML = book;
    btn.innerHTML = "Delete";
    div.setAttribute("id", `book-${index}`);
    div.appendChild(para);
    div.appendChild(btn);
    btn.setAttribute("class", "delete");
    btn.setAttribute("data", `${index}`);
    // btn.addEventListener("click", deleteBookFromLibrary(div));
    document.getElementById("main").appendChild(div);
  });
};

var buttons = document.getElementsByClassName("delete").item(0);
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
}

render(myLibrary, document.querySelector("#main"));
