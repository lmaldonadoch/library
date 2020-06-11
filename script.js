let myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
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
  form = document.getElementById('addbook');
  newBook = new Book(
    form[0].value,
    form[1].value,
    form[2].value,
    form[3].checked,
  );
  myLibrary.push(newBook);
  save(myLibrary);
}

function showForm() {
  const addBook = document.getElementById('addbook');
  if (addBook.style.display == 'none') {
    addBook.style.display = 'flex';
  } else {
    addBook.style.display = 'none';
  }
}

var save = function (array) {
  localStorage.setItem('myLibrary', JSON.stringify(array));
};

const deleteBookFromLibrary = function (book) {
  myLibrary[book.target.attributes.data.value] = null;
  const new_libr = [];
  myLibrary.forEach((elem) => {
    if (elem != null) {
      new_libr.push(elem);
    }
  });

  console.log(new_libr);

  save(new_libr);
  location.reload();
};

const changeReadStatus = function (book) {
  console.log(myLibrary[book.target.attributes.data.value]);
  if (myLibrary[book.target.attributes.data.value].read == true) {
    myLibrary[book.target.attributes.data.value].read = false;
  } else {
    myLibrary[book.target.attributes.data.value].read = true;
  }
  save(myLibrary);
  location.reload();
};

const render = function (arr, node) {
  arr.forEach((book, index) => {
    const div = document.createElement('DIV');
    const para = document.createElement('P');
    const btn = document.createElement('BUTTON');
    const btnRead = document.createElement('BUTTON');
    para.innerHTML = `${book.title} was written by ${book.author}
    and contains ${book.pages} pages.`;
    if (book.read == true) {
      para.innerHTML += ' You already read this book.';
    } else {
      para.innerHTML += " You haven't read this book.";
    }
    btn.innerHTML = 'Delete';
    btnRead.innerHTML = 'Read';
    div.setAttribute('id', `book-${index}`);
    div.setAttribute('class', 'books');
    div.appendChild(para);
    div.appendChild(btn);
    div.appendChild(btnRead);
    btn.setAttribute('id', 'delete');
    btn.setAttribute('data', `${index}`);
    btn.setAttribute('class', 'books-button');
    btn.setAttribute('type', 'submit');
    btnRead.setAttribute('id', 'read');
    btnRead.setAttribute('class', 'read-button');
    btnRead.setAttribute('data', `${index}`);
    btnRead.setAttribute('type', 'submit');
    document.getElementById('main').appendChild(div);
  });
};

render(myLibrary, document.querySelector('#main'));

const buttons = document.getElementsByClassName('books-button');
const buttonsRead = document.getElementsByClassName('read-button');

console.log(myLibrary);

[...buttons].forEach((button) => {
  console.log(button);
  button.addEventListener('click', deleteBookFromLibrary);
});

[...buttonsRead].forEach((button) => {
  console.log(button);
  button.addEventListener('click', changeReadStatus);
});
