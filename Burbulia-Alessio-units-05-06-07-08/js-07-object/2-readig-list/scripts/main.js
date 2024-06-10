/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * 2.Reading list
 *  ● Create an array of objects, where each object describes a book and has
 *    properties for the title (a string), author (a string), and alreadyRead (a
 *    boolean indicating if you read it yet).
 * 
 *  ● Iterate through the array of books. For each book, log the book title and
 *    book author like so: "The Hobbit by J.R.R. Tolkien".
 *  
 *  ● Now use an if/else statement to change the output depending on whether
 *    you read it yet or not. If you read it, log a string like 'You already read "The
 *    Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read
 *    "The Lord of the Rings" by J.R.R. Tolkien.'
 */

//Object of books
let books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        alreadyRead: true
    },
    {
        title: "1984",
        author: "George Orwell",
        alreadyRead: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        alreadyRead: true
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        alreadyRead: false
    }
];

for (let i = 0; i < books.length; i++) {
    let isReadMess = '';//to know is a string initialisation
    if(books[i]['alreadyRead'] == true)//is object in [i] position already read?
        isReadMess = 'is already read';
    else
        isReadMess = 'isn\'t already read';

    //print result
    console.log(`the book named ${books[i].title} ${isReadMess}`);
}