# 2 universal translator

## request of exercise
      
- Write a function named helloWorld that:
      
- takes 1 argument, a language code (e.g. "es", "de", "en")
      
- returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
      
- Call that function for each of the supported languages and log the result to make sure it works.

### on my html
I wrote my standard boilerplate with my personal meta

`name="author" content="Alessio Burbulia"`

`name="description" content="js-1-big-numbers"`

and at the bottom on body i wrote `<script src="scripts/main.js"></script>`.


After that i wrote a request of my program with `<h1>` tag for the title of the exercise and a `<p>`.

later i build a select with for option with consistent value, every input is **REQUIRED DATA**.

```
    <option value="english" selected>English</option>
    <option value="frances">Frances</option>
    <option value="espanol">Espanol</option>
    <option value="portugues">Português</option>
```

For this select i needed a button `type="button"` with an id `id="translator"`.
An important element is `<p id="translate"> Hello World </p>`, we overwrite here our output. 

### on my javascript

I build only three variables:
- the fist permise to take the button and put in a variables called btn:\
`let btn = document.getElementById("translator");`

- the second is in function scope **`translate()`**, it take only one param:\
    `let message;`

- the third is the value of the select, important to know the selected languages
    `lang = document.getElementById("languages").value;`

we wont to insert in `message` a string with a diffent translation of **"hello word"**

i create a function for print the mesage on my html and console, based on value of my select 

```
    let message;
    switch (lan) {
        case 'frances':
            message = "Bonjour mot";
        break;
        
        case 'espanol':
            message = "Hola Mundo";
        break;

        case 'portugues':
            message = "Olá Mundo";
        break;

        default:
            message = "HELLO WORLD";
    }
    document.getElementById("translate").innerHTML = message;
    console.log(message);
    
```
the second step is to create an event on click of the button, when click the button,
stabilize a **value of my lang**, in this event, because after is `null`

```
    //build ad event when i press the button
    btn.addEventListener("click", function(){
        //take the value of my selection
        lang = document.getElementById("languages").value;
        
        //call the function with the value of selection
        translate(lang);
    })
```



