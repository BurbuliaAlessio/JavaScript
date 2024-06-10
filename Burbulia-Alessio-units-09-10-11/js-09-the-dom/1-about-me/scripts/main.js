/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * A manipulating of dom - insert personal information
 */

// set a font-family inline with javascript in the body
let pageNode = document.body;
pageNode.style.fontFamily = 'Arial, sans-serif';

// array of object user 
const users = [
    { 
        id: 1, firstName: "Mario", 
        lastName: "Rossi", 
        birthDate: new Date("1990-01-01"), 
        birthPlace: "Rome", 
        gender: "Male", 
        email: "mario.rossi@example.com" 
    },
    {
        id: 2, 
        firstName: "Luca", 
        lastName: "Bianchi", 
        birthDate: new Date("1985-05-15"), 
        birthPlace: "Milan", 
        gender: "Male", 
        email: "luca.bianchi@example.com" 
    },
    { 
        id: 3, 
        firstName: "Giulia", 
        lastName: "Verdi", 
        birthDate: new Date("1992-12-25"), 
        birthPlace: "Naples", 
        gender: "Female", 
        email: "giulia.verdi@example.com" 
    }
];

let propertyArray = ['firstName' , 'lastName' , 'birthDate' , 'birthPlace' , 'gender' , 'email'];

/**
 * this function permise to create a string with a english
 * formatting 
 * 
 * @example 2002 agoust 23
 * @param {Date} data - a date to convert
 * @return {String} data - a string format of a date
*/
const dateFormatting = (date) => {
    return date.toLocaleDateString('en-EN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// usersContainer.appendChild is not a function at createTableByUsers

function createTableByUsers(){
    //create a object Element
    let usersContainer = document.getElementById('users-container');
    console.log('usersContainer:', usersContainer); // the bugger

    // check the existence of an element - getElementById return null if doesen't exist 
    if (usersContainer != null) {
    
        // Create the table element
        let table = document.createElement('table');

        //create element thead
        let thead = document.createElement('thead');

        //create element tr - columns
        let rowHeader = document.createElement('tr');
            
        // array with the thead
        let headers = ['First Name', 'Last Name', 'Birth Date', 'Birth Place', 'Gender', 'Email'];

        //method forheach for array headers
        headers.forEach(headerText => {
            // create element th for every string in the headers
            let header = document.createElement('th');
            //content is corrent element string
            header.textContent = headerText;
            //put th element with content into rowHeader
            rowHeader.appendChild(header);
        });

        // put into thead the tr
        thead.appendChild(rowHeader);

        // put into table the thead
        table.appendChild(thead);

        let tbody = document.createElement('tbody');

        users.forEach(user => {
            let row = document.createElement('tr');
                for (let i = 0; i < propertyArray.length; i++){

                    // create a n° td like the length of proprierty - same the th
                    let cell = document.createElement('td');

                    // put the content into the cell
                    if(i != 2 /*birthday */)
                        cell.textContent = user[propertyArray[i]];
                    else
                        cell.textContent = dateFormatting(user[propertyArray[i]]);

                    // put the cell into the row
                    row.appendChild(cell);
                }
                // put the row into tbody
                tbody.appendChild(row);
            })
            // put tbody at the table
            table.appendChild(tbody);

            // put the the table in the container
            usersContainer.appendChild(table);
    }
    else console.log('No elements with id "users-container" found.');
}

createTableByUsers();

// document.getElementById('list-personal-info');