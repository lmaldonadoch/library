let myLibrary = ["The Lord of the Rings", "HP", "Narnia"];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

var render = function (template, node) {
  node.innerHTML = template;
};

var template = [];

myLibrary.forEach((book) => {
  template.push(`<p>${book}</p>`);
});
render(template, document.querySelector("#main"));
