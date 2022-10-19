// Initial counter setup
let counter;
const counterElement = document.querySelector(".number");
const numberLimit = 99; // After reaching the number limit, the counter will restart from 0

function counterUpdate(element) {
    element.textContent = counter;
}

function counterInit() {
    counter = 0;
    counterUpdate(counterElement);
}

function modifyCounter(number) {
    counter+= number;
    if (Math.abs(counter) > numberLimit) { 
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
