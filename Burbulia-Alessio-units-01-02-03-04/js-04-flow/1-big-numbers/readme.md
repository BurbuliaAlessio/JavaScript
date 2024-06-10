# 1 Big number

## request of exercise
● Write a function named greaterNum that:

○ takes **2 arguments**, both numbers.

○ returns whichever number is the **greater** (higher) number.

● Call that function 2 times with different number pairs, and log the output to

make sure it works (e.g. "The greater number of 5 and 10 is 10.").

### on my html
I wrote my standard boilerplate with my personal meta

`name="author" content="Alessio Burbulia"`

`name="description" content="js-1-big-numbers"`

and at the bottom on body i wrote `<script src="scripts/main.js"></script>`.


After that i wrote a request of my program with `<h1>` tag for the title of the exercise and a `<p>`.

later i build a form with 4 inputs `type="number"` and similar ids, every input is **REQUIRED DATA**.

For this form i needed a button `type="button"` with an id `id="button"`.

the last important elements are `<p id = "first-call">` and 
`<p id = "second-call">`, here we put the **result of the code**.

to be careful we need a consistent id to call on my javascript, in particular for the input type, the button, and where we like to print the message of the results, in this case the last two `<p>`.

### on my javascript

I build four variables, every one of these calls an input by Id and take this value: 4 numbers.
later I build, the functions, one returned the grater number like 2 params

```
/**
function greaterNum(num1, num2){
    let biggest;
    if (num1 >= num2)
        biggest = num1;
    else
        biggest = num2;
    return biggest;
}
```
the second empties my input value when the event starts.

```
function emptyOutinput(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("third-number").value = "";
    document.getElementById("fourth-number").value = "";
}
```
I create an event on my button for my html, when I press the button, it starts a function, where I put my variables, call the function, and print on html and console a message with the greater number.







