// Library object
let library = {
    books: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, isAvailable: true },
        { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, isAvailable: true },
        { title: "1984", author: "George Orwell", yearPublished: 1949, isAvailable: false }
    ],

    // Method to add a new book to the library
    addBook: function(newBook) {
        this.books.push(newBook); // Adds the new book to the books array
    },

    // Method to list all books in the library
    listBooks: function() {
        console.log("Books in the library:");
        this.books.forEach(book => {
            console.log(`${book.title} by ${book.author} (${book.yearPublished}) - ${book.isAvailable ? "Available" : "Checked out"}`);
        });
    },

    // Method to check out a book
    checkOutBook: function(title) {
        const book = this.books.find(book => book.title === title); // Find the book by title
        if (book && book.isAvailable) {
            book.isAvailable = false; // Mark as unavailable
            console.log(`${title} has been checked out.`);
        } else if (book && !book.isAvailable) {
            console.log(`${title} is already checked out.`);
        } else {
            console.log(`${title} not found in the library.`);
        }
    },

    // Method to return a book
    returnBook: function(title) {
        const book = this.books.find(book => book.title === title); // Find the book by title
        if (book && !book.isAvailable) {
            book.isAvailable = true; // Mark as available
            console.log(`${title} has been returned.`);
        } else if (book && book.isAvailable) {
            console.log(`${title} is already available.`);
        } else {
            console.log(`${title} not found in the library.`);
        }
    }
};

// Testing the library object methods
// 1. List all books initially
library.listBooks();

// 2. Add a new book
library.addBook({ title: "Moby Dick", author: "Herman Melville", yearPublished: 1851, isAvailable: true });

// 3. Check out a book (try checking out "1984" and "The Great Gatsby")
library.checkOutBook("1984");
library.checkOutBook("The Great Gatsby");

// 4. Return a book (try returning "The Great Gatsby" and "1984")
library.returnBook("The Great Gatsby");
library.returnBook("1984");

// 5. List books again to see the updates
library.listBooks();
