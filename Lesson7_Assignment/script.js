/*
Program Name: Recipe Display Application
Author: Deanna Cook
Date: July 21 2016
Filename: script.js
*/

//displays the next element after the current target
function display(event) {
    $(event.currentTarget).next().fadeIn("slow");
}//end display

//attach evnet listener to h3 elements to invoke display function when clicked 
$("h3").click(display);

