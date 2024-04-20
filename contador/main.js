const sub = document.getElementById ("sub");
const sum = document.getElementById ("sum");
const counter = document.getElementById ("counter")


let counterNumber = parseInt (counter.textContent);

function sumCounter() {
    counterNumber = counterNumber + 1;
    counter.textContent = counterNumber;
}

function subCounter() {
    counterNumber = counterNumber - 1;
    counter.textContent = counterNumber;
}

sum.addEventListener("click", sumCounter);
sub.addEventListener("click", subCounter);






