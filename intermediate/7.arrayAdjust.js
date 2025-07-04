const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
]; 

// a) find book title by id
function getBookTitle(bookId) {
    let book = books.find(b => b.id === bookId);
    return (book) ? book.title : 'Book not found';
}

console.log(getBookTitle(1));
console.log(getBookTitle(4));

// b) filter books published before 1950
function getOldBooks() {
    return books.filter(book => book.year < 1950);
}

console.log(getOldBooks());


// c) map new classic genre to each book
function addGenre() {
    return books.map(book => (
        { ...book, genre: 'Classic' }
    ));
}

console.log(addGenre());

// d) get books from author initials
function getEachInitial(name) {
    return name
        .split(/[\s.]+/) // split by space or period
        .filter(Boolean) // remove empty strings
        .map(word => word[0])
        .join('')
        .toUpperCase();
}

function getTitles(authorInitial) {
    return books
        .filter(book => getEachInitial(book.author) === authorInitial.toUpperCase())
        .map(book => book.title);
}

console.log(getTitles('Fsf'));
console.log(getTitles('AH'));
console.log(getTitles('jds'));

// e) forEach book, find the latest
function latestBook() {
    let latestYear = books[0].year;
    books.forEach(book => {
        if (book.year > latestYear) {
            latestYear = book.year;
        }
    });
    return books.find(book => book.year === latestYear);
}

console.log(latestBook());