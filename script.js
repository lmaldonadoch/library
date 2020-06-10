let myLibrary = ["The Lord of the Rings", "HP", "Narnia"];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
  var addBook = document.getElementById("AddBook");
  if (addBook.style.display == "none") {
    addBook.style.display == "flex";
    "<p> TEST </p>"
  } else {
    addBook.style.display == "none";
  }
}

var render = function (template, node) {
  node.innerHTML = template.join(" ");
};

var template = [];

myLibrary.forEach((book) => {
  template.push(`<p>${book}</p>`);
});

render(template, document.querySelector("#main"));
