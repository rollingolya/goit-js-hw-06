const decrementButton = document.querySelector('button[data-action="decrement"]');
// console.log(decrementButton);
const incrementButton = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

decrementButton.addEventListener('click', (event) => {
    counterValue -= 1;
    const valueRef = document.querySelector('span');

    valueRef.textContent = counterValue;
});

incrementButton.addEventListener('click', (event) => {
    counterValue += 1;
    console.log('Клікнули на інкремент');

    const valueRef = document.querySelector('span');
    valueRef.textContent = counterValue;
});

console.log(counterValue);
