/**
 * @file: main.js
 * @author: Alessio Burbulia
 * 
 * 1.Recipe
 *  ● Create an object to hold information on your favorite recipes[prefix + 'Recipe']. It should have
 *    properties for title (a string), servings (a number), and ingredients (an
 *    array of strings).
 *  ● On separate lines (one console.log statement for each), log the recipes[prefix + 'Recipe']
 *    information
 * 
 *  Bonus: Create an array that holds several recipes and log them all
 */

// unit of measurement = grams [g] (solid)
const recipes = [ //array
        fsRecipe = {  //first recipes[prefix + 'Recipe']
        title : 'Classic Ragu',
        servings : 5,
        ingredients : [
            'sauteed', 
            'mixed minced meat',
            'tomatoPuree',
            'water',
            'pepper',
            'salt'
        ]
    },

    sdRecipe = {//second repide
        title : 'Crepe',
        servings : 4,
        ingredients : ['egg', 'water', 'flour', 'oil']
    },

    tdRecipe = {//third repide
        title : 'Pasta',
        servings : 3,
        ingredients : ['egg', 'water', 'flour']
    },
]

for (let i = 0; i < recipes.length; i++) {
    console.log(
        `Our recipe named ${recipes[i].title} maked for ${recipes[i].servings} peoples we need
        1. ${recipes[i].ingredients[0]},
        2. ${recipes[i].ingredients[1]},
        3. ${recipes[i].ingredients[2]},
        4. ${recipes[i].ingredients[3]},
        5. ${recipes[i].ingredients[4]},
        6. ${recipes[i].ingredients[5]}`
    );
}