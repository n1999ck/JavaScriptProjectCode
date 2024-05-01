var book1 = {
  title: "Moby Dick",
  year: 1851,
  author: "Herman Melville",
  genres: ["Adventure", "Epic", "Sea story"],
  characters: ["Ishmael", "Queequeg", "Ahab"],
};

var book2 = {
  title: "Song of Solomon",
  year: 1977,
  author: "Toni Morrison",
  genres: ["African-American Literature", "Literary Fiction"],
  characters: ["Milkman", "Pilate", "Hagar"],
};

var book3 = {
  title: "Crime and Punishment",
  year: 1866,
  author: "Fyodor Dostoevsky",
  genres: ["Psychological", "Literary Fiction"],
  characters: ["Raskolnikov", "Sonya", "Razumikhin"],
};

var bookNumber = 0;
const books = [book1, book2, book3];

function sendBook(book) {
  document.getElementById("bookTitle").innerText = book.title;
  document.getElementById("bookYear").innerText = book.year;
  document.getElementById("bookAuthor").innerText = book.author;
  document.getElementById("bookGenres").innerText =
    "Genres: " + book.genres.join(", ");
  document.getElementById("bookCharacters").innerText =
    "Main Characters: " + book.characters.join(", ");
}

function fetchBook() {
    sendBook(books[bookNumber]);
    bookNumber = (bookNumber + 1) % books.length;
}

var myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise is resolved!")
    }, 3000)
   })

function update() {
    document.getElementById("promise").innerText = "Promise is pending..."
    myPromise.then((result) => {
    fetchBook();
    document.getElementById("promise").innerText = result
   })
}
