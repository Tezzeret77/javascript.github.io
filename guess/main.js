const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const form = document.getElementById('guess-form');
const input = document.getElementById('guess');
const hints = document.getElementById('hints');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const guess = parseInt(input.value);

    if (guess === randomNumber) {
        showHint(`¡Felicidades! Has adivinado el número en ${attempts} intentos.`);
    } else if (guess < randomNumber) {
        showHint('El numero es mayor');
    } else {
        showHint ('El numero es menor')
    }

    attempts++;
    input.value = '';
    });


    function showHint(message) {
        const hint = document.createElement('p');
        hint.textContent = message;
        hints.appendChild(hint);
    }








