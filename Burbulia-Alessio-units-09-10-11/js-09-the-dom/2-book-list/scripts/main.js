    /**
     * @file: main.js
     * @author: Alessio Burbulia
     * 
     * A manipulating of dom - insert personal information
     */

    // array of object content 
    const books = [
        {
            title: 'Atomic Habits',
            author: 'James Clear',
            alreadyRead: true,
            bookCover: 'https://cdn.kobo.com/book-images/9d811387-c1bf-45e6-85d5-7bbe3beac373/1200/1200/False/atomic-habits-1.jpg'
        },
        {
            title: 'Sapiens: A Brief History of Humankind',
            author: 'Yuval Noah Harari',
            alreadyRead: true,
            bookCover: 'https://m.media-amazon.com/images/I/61i4k7DWNFL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            title: 'Thinking, Fast and Slow',
            author: 'Daniel Kahneman',
            alreadyRead: false,
            bookCover: 'https://miro.medium.com/v2/resize:fit:1400/1*xzlkGgk5Z7IYXDiIjEgtpA.jpeg'
        },
        {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            alreadyRead: true,
            bookCover: 'https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            title: 'The Subtle Art of Not Giving a F*ck',
            author: 'Mark Manson',
            alreadyRead: false,
            bookCover: 'https://markmanson.net/wp-content/themes/mm-main/images/books-subtle-art.png'
        }
    ];

    let propertyArray = ['title' , 'author' , 'alreadyRead' , 'bookCover'];


    // array with the thead
        let headersContent = ['Title', 'author', 'Your Read' , 'book cover'];

    /**
     * @param {}
     * @return {} 
    */
    function createTableBycontents(propertyArray, headersContent , tbodycontent){
        //create a object Element
        let contentsContainer = document.getElementById('contents-container');
        console.log('contentsContainer:', contentsContainer); // the bugger

        // check the existence of an element - getElementById return null if doesen't exist 
        if (contentsContainer != null) {
        
            // Create the table element
            let table = document.createElement('table');

            //create element thead
            let thead = document.createElement('thead');

            //create element tr - columns
            let tr = document.createElement('tr');
            

            //method forheach for array headers
            headersContent.forEach(headerText => {
                // create element th for every string in the headers
                let header = document.createElement('th');
                //content is corrent element string
                header.textContent = headerText;
                //put th element with content into tr
                tr.appendChild(header);
            });

            // put into thead the tr
            thead.appendChild(tr);

            // put into table the thead
            table.appendChild(thead);

            let tbody = document.createElement('tbody');

            tbodycontent.forEach(content => {
                let row = document.createElement('tr');
                    for (let i = 0; i < propertyArray.length; i++){

                        // create a n° td like the length of proprierty - same the th
                        let td = document.createElement('td');

                            // when we find a image
                        if(propertyArray[i] === 'bookCover'){
                            // create a element image
                            let coverBook = document.createElement('img');
                            coverBook.style.maxWidth = '100px'; // Aggiungi questo per limitare la larghezza dell'immagine
                            coverBook.src = content[propertyArray[i]] 
                            td.appendChild(coverBook);
                        }    
                        else
                            td.textContent = content[propertyArray[i]];
                            
                        //color the text of already read
                        if (propertyArray[i] === 'alreadyRead') {
                            if (content[propertyArray[i]])
                                td.style.color = 'green'; // Se già letto, colora il testo di rosso
                            else 
                                td.style.color = 'red'; // Se non ancora letto, colora il testo di verde
                            }
                        // put the td into the row
                        row.appendChild(td);
                    }
                    // put the row into tbody
                    tbody.appendChild(row);
                })
                // put tbody at the table
                table.appendChild(tbody);

                // put the the table in the container
                contentsContainer.appendChild(table);
        }
        else console.log('No elements with id "contents-container" found.');
    }


    /**
     * this function apply a style css
     * after 5 seconds with DOM manipulating
    */
    function appllyCSSafter5second(delay){
        setTimeout(() => {
                    // Crea un elemento <link> per il tuo file CSS esterno
        let linkElement = document.createElement('link');

        // Imposta gli attributi dell'elemento <link>
        linkElement.rel = 'stylesheet';
        linkElement.type = 'text/css';
        linkElement.href = './styles/style.css'; // Sostituisci 'styles.css' con il percorso del tuo file CSS

        // Aggiungi l'elemento <link> al documento <head>
        document.head.appendChild(linkElement);
        }, delay);

    }
    createTableBycontents(propertyArray, headersContent, books);    
    appllyCSSafter5second(5000);