// Functions declarations

function createHtmlElement(tag, classes = '', htmlContent = '') {
    const el = document.createElement(`${tag}`);
    if (classes) el.className = classes;
    el.innerHTML = htmlContent;

    return el;
}

function renderPage() {

    const headerElement = createHtmlElement('header');
    const h1Element = createHtmlElement('h1','','A simple JS counter');
    const mainSection = createHtmlElement('main');
    const counterWrapperElement = createHtmlElement('div', 'counter-wrapper');
    const numberElement = createHtmlElement('span', 'number');
    const btnWrapper = createHtmlElement('div', 'btn-wrapper');
    const btnPlus = createHtmlElement('div', 'counter-btn plus', '+');
    const btnMinus = createHtmlElement('div', 'counter-btn minus', '-');
    const btnReset = createHtmlElement('div', 'counter-btn reset', 'reset');
    
    
    // Append elements
    
    const appSection = document.querySelector(".main-app");
    
    appSection.appendChild(headerElement);
    headerElement.appendChild(h1Element);
    appSection.appendChild(mainSection);
    mainSection.appendChild(counterWrapperElement);
    counterWrapperElement.appendChild(numberElement);
    mainSection.appendChild(btnWrapper);
    btnWrapper.appendChild(btnMinus);
    btnWrapper.appendChild(btnPlus);
    btnWrapper.appendChild(btnReset);
    
    
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
