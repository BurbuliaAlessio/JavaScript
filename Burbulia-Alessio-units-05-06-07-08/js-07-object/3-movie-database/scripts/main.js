/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * 3.Movie database
 *   ● Create an object to store the following information about a movie: title (a
 *     string), duration (a number), and stars (an array of strings).
 *     
 *   ● Create an Array of objects that can hold several movies.
 *     
 *   ● Create a function to print out the movie information like so: 'Puff the Magic
 *     Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes.'
 *     
 *   ● Test the function by printing one movie.
 *     
 *   ● Use the function to print all the movies in the Array
 */

// Create an object to store movie information
const movie1 = {
    title: 'The Great Adventure',
    duration: 120,
    stars: ['Tom Hanks', 'Emma Watson', 'Brad Pitt']
};

const movie2 = {
    title: 'Fantastic Journey',
    duration: 110,
    stars: ['Johnny Depp', 'Anne Hathaway', 'Morgan Freeman']
};

const movie3 = {
    title: 'Epic Quest',
    duration: 130,
    stars: ['Leonardo DiCaprio', 'Jennifer Lawrence', 'Denzel Washington']
};

// Create an array of objects to hold several movies
let movies = [movie1, movie2, movie3];

/**
 * This function print a message 
 * about a movie
 * @param {Array} movies -  a array contains different Object movie
*/
function printMessMovie(movies){
    for (let i = 0; i < movies.length; i++) {

        console.log(`The movies ${movies[i].title} lats ${movies[i].duration}, the cast stars are:`);
        
        for (let subI = 0; subI < movies[i].stars.length; subI++){
            console.log(movies[i].stars[subI]);//print star
        }
    }
}
printMessMovie(movies);