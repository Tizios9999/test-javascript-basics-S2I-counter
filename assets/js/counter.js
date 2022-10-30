// Functions declarations

function renderPage() {

    const headerElement = document.createElement('header');
    const h1Element = document.createElement('h1');
    const h1TextNode = document.createTextNode('A simple JS counter');
    const mainSection = document.createElement('main');
    const counterWrapperElement = document.createElement('div');
    counterWrapperElement.classList.add('counter-wrapper');
    const numberElement = document.createElement('span');
    numberElement.classList.add('number');
    
    
    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add('btn-wrapper');
    
    const btnPlus = document.createElement('div');
    btnPlus.classList.add('counter-btn', 'plus');
    const plusTextNode = document.createTextNode('+');
    
    const btnMinus = document.createElement('div');
    btnMinus.classList.add('counter-btn', 'minus');
    const minusTextNode = document.createTextNode('-');
    
    const btnReset = document.createElement('div');
    btnReset.classList.add('counter-btn', 'reset');
    const resetTextNode = document.createTextNode('Reset');
    
    
    
    // Append elements
    
    const appSection = document.querySelector(".main-app");
    
    appSection.appendChild(headerElement);
    headerElement.appendChild(h1Element);
    h1Element.appendChild(h1TextNode);
    appSection.appendChild(mainSection);
    mainSection.appendChild(counterWrapperElement);
    counterWrapperElement.appendChild(numberElement);
    mainSection.appendChild(btnWrapper);
    btnWrapper.appendChild(btnMinus).appendChild(minusTextNode);
    btnWrapper.appendChild(btnPlus).appendChild(plusTextNode);
    btnWrapper.appendChild(btnReset).appendChild(resetTextNode);
    
    
}
    
function updateCounterLabel(element) {
    element.textContent = counter;
}

function initializeCounter() {
    counter = 0;
    updateCounterLabel(numberElement);
}

function modifyCounter(number) {
    counter+= number;
    if (Math.abs(counter) > NUMBER_LIMIT) { 
        initializeCounter(); 
    } else {
        updateCounterLabel(numberElement);
    }
}

// Initial counter setup

let counter;
const NUMBER_LIMIT = 99; // After reaching the number limit, the counter will restart from 0

// Page rendering

renderPage();

// Elements selectors

const btnWrapper = document.querySelector('.btn-wrapper');
const numberElement = document.querySelector('.number');

// First counter initialization

initializeCounter();

// The Button Wrapper event listener - EVENT DELEGATION

btnWrapper.addEventListener("click", function(e) {
    e.target.classList.contains("plus") ? modifyCounter(1) : 
    e.target.classList.contains("minus") ? modifyCounter(-1): 
    e.target.classList.contains("reset") ? initializeCounter() :
    e.stopPropagation();
});
