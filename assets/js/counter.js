// Draw elements

const headerElement = document.createElement('header');
const h1Element = document.createElement('h1');
const h1TextNode = document.createTextNode('A simple JS counter');
const counterWrapperElement = document.createElement('div');
counterWrapperElement.classList.add('counter-wrapper');
const numberElement = document.createElement('span');
numberElement.classList.add('number');

const btnWrapper = document.createElement('div');
btnWrapper.classList.add('btn-wrapper');

const btnPlus = document.createElement('span');
btnPlus.classList.add('counter-btn', 'plus');

const btnMinus = document.createElement('span');
btnMinus.classList.add('counter-btn', 'minus');

const btnReset = document.createElement('span');
btnReset.classList.add('counter-btn', 'reset');

// Append elements


// Initial counter setup
let counter;
const counterElement = document.querySelector(".number");
const NUMBER_LIMIT = 99; // After reaching the number limit, the counter will restart from 0

function counterUpdate(element) {
    element.textContent = counter;
}

function counterInit() {
    counter = 0;
    counterUpdate(counterElement);
}

function modifyCounter(number) {
    counter+= number;
    if (Math.abs(counter) > NUMBER_LIMIT) { 
        counterInit(); 
    } else {
        counterUpdate(counterElement);
    }
}

counterInit();

// Button click events

btnSection = document.querySelector(".btn-section");

btnSection.addEventListener("click", function(e) {
    e.target.classList.contains("plus") ? modifyCounter(1) : 
    e.target.classList.contains("minus") ? modifyCounter(-1): 
    e.target.classList.contains("reset") ? counterInit() :
    e.stopPropagation();
});
