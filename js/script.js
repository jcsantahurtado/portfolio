import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll('.input');

inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    });
});


const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
});