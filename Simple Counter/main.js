let counter = 0;

const counterValue = document.getElementById('countervalue');
const incrementButton = document.getElementById('incrementbutton');
const decrementButton = document.getElementById('decrementbutton');
const resetButton = document.querySelector('#resetbutton');

incrementButton.addEventListener('click', () =>{
    counter++;
    counterValue.innerHTML = counter;
});

decrementButton.addEventListener('click', () =>{
    counter--;
    counterValue.innerHTML = counter;
});

resetButton.addEventListener('click', reset);

function reset(){
    counter = 0;
    counterValue.innerHTML = counter;
}