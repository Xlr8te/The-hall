/* Declare variables below to save the different sections (divs) of your story*/
let body = document.querySelector("body");
let title = document.querySelector(".title");
let opening = document.querySelector(".story-opening");
let buttons = document.querySelector(".buttons");
let buttonOne = document.querySelector(".option-one");
let optionOne = document.querySelector(".option-one-screen");
let optionOneNext = document.querySelector(".option-one-next");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwo = document.querySelector("option-two-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionTwoEnd = document.querySelector(".option-two-end");
let buttonTwo = document.querySelector(".option-two");
let buttonNextOne = document.querySelector(".option-one-next");
let buttonNextTwo = document.querySelector(".option-two-next");

buttonOne.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionOne.style.display = "block";
    buttonNextOne.style.display = "block";
};

buttonTwo.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionTwoScreen.style.display = "block";
    buttonNextTwo.style.display = "block";

};
buttonNextOne.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionOneEnd.style.display = "block";
    optionOne.style.display = "none";



};
buttonNextTwo.onclick = function() {
    opening.style.display = "none";
    buttons.style.display = "none";
    optionTwoEnd.style.display = "block";
    optionTwoScreen.style.display = "none";


};


/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/