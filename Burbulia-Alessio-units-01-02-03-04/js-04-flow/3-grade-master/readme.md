# 2 universal translator

## request of exercise
      
3.Grade master
- Write a function named assignGrade that:
- takes 1 argument, a number score.
- returns a grade for the score, either "A", "B", "C", "D", or "F".
- Call that function for a few different scores and log the result to make sure it works.

### on my html
I wrote my standard boilerplate with my personal meta

`name="author" content="Alessio Burbulia"`

`name="description" content="js-1-big-numbers"`

and at the bottom on body i wrote `<script src="scripts/main.js"></script>`.


After that i wrote a request of my program with `<h1>` tag for the title of the exercise and a `<p>`.

later i build a select with for option with consistent value, every input is **REQUIRED DATA**.

```
    <select name="score" id="number-score" required>
        <option value= "2" selected> 2 [most bad] </option>
        <option value= "3"> 3 </option>
        <option value= "4"> 4 </option>
        <option value= "5"> 5 </option>
        <option value= "6"> 6 </option>
        <option value= "7"> 7 </option>
        <option value= "8"> 8 </option>
        <option value= "9"> 9 </option>
        <option value="10"> 10 [the better] </option>
    </select>
```

For this select i needed a button `type="button"` with an id `id="changer"`.
An important element is `<p id="valutation-changed"> the print change </p>`, we overwrite here our output. 

### on my javascript

I build only three variables:
- the fist permise to take the button and put in a variables called btn:\
`let btn = document.getElementById("changer");`

- the second is in function scope **`assignGrade()`**, it take only one param:\
    `let alfScore;`

- the third is the value of the select, important to know the selected valutation
    `valutation = document.getElementById("number-score").value;`

we wont to insert in `alfScore` a string with a diffent type of **valutation**

i create a function for print the message on my html and console, based on value of my select

```
function assignGrade(val){
    //in scope assignGrade() variable
    let alfScore;

    switch (val) {
        case "2":
            alfScore = "F";
        break;
        
        case "3":
            alfScore = "E";
        break;

etc.....

        case "10":
            alfScore = "A+";
        break
    }

    document.getElementById("valutation-changed").innerHTML = " the " + valutation + " in alpha score is " + alfScore;
    console.log(" the " + valutation + " in alpha score is " + alfScore);
}

```
the second step is to create an event on click of the button, when click the button,
stabilize a **value of my valutation**, in this event, because after is `null`
```
    //build ad event when i press the button
    btn.addEventListener("click", function(){
        //take the value of my selection
        valutation = document.getElementById("number-score").value;

        //call the function with the value of selection
        assignGrade(valutation);
    })
```



