const counterValue = document.querySelector('.counter-value');
const increaseBtn = document.querySelector('.increase-btn');
const decreaseBtn = document.querySelector('.decrease-btn');
const resetBtn = document.querySelector('.reset-btn');

let counter = 0;

increaseBtn.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});

decreaseBtn.addEventListener('click', () => {
    counter--;
    counterValue.textContent = counter;
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    counterValue.textContent = counter;
});
