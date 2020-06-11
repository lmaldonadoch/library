let myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
if (myLibrary == null) {
  myLibrary = [];
}

function Book(title, author, pages, read) {
  (this.title = title),
  (this.author = author),
  (this.pages = pages),
  (this.read = read);
}

const save = function save(array) {
  localStorage.setItem('myLibrary', JSON.stringify(array));
};

function addBookToLibrary() {
  const form = document.getElementById('addbook');
  const newBook = new Book(
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

const deleteBookFromLibrary = function deleteBookFromLibrary(book) {
  myLibrary[book.target.attributes.data.value] = null;
  const new_libr = [];
  myLibrary.forEach((elem) => {
    if (elem != null) {
      new_libr.push(elem);
    }
  });

  save(new_libr);
  location.reload();
};

const changeReadStatus = function changeReadStatus(book) {
  if (myLibrary[book.target.attributes.data.value].read == true) {
    myLibrary[book.target.attributes.data.value].read = false;
  } else {
    myLibrary[book.target.attributes.data.value].read = true;
  }
  save(myLibrary);
  location.reload();
};

const render = function render(arr, node) {
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
const btnShow = document.getElementById('showForm');
btnShow.addEventListener('click', showForm);

[...buttons].forEach((button) => {
  button.addEventListener('click', deleteBookFromLibrary);
});

[...buttonsRead].forEach((button) => {
  button.addEventListener('click', changeReadStatus);
});
