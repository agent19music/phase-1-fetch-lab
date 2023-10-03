function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => renderBooks(json));
}
 fetchBooks();
  


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fetch5thbook(){
  fetch('https://anapioficeandfire.com/api/books/5')
    .then(res => res.json())
    .then((data) => {
      const displayBook = document.createElement('ul')
      const body = document.querySelector('body')
      body.appendChild(displayBook);
      displayBook.textContent ='Fifth Book'
      for(let item in data){
        displayBook.innerHTML += `
        <li>${item}: ${data[item]}</li>`
      }
    })
}

fetch5thbook();

function get1031st(){
  fetch('https://anapioficeandfire.com/api/characters/1031')
    .then(res => res.json())
    .then((data) => {
      const displayCharacter = document.createElement('ul')
      const body = document.querySelector('body')
      body.appendChild(displayCharacter);
      displayCharacter.textContent = '1031st Guy'
      for(let item in data){
        displayCharacter.innerHTML += `<li>${item}: ${data[item]}</li>`
      }
    })
}

get1031st();

function getTotalPages() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(res => res.json())
    .then((data) => {
      let totalPages = 0;
      const pages = document.createElement('p')
      const body = document.querySelector('body')
      body.appendChild(pages);
      for(let book of data){
        totalPages += book.numberOfPages;
      }
      pages.textContent = `Total number of pages is : ${totalPages}`
    })
}

getTotalPages();
