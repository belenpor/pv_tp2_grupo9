




const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

inputElement.addEventListener('input', function() {
    outputElement.textContent = inputElement.value;

    if (inputElement.value.length > 20) {
        outputElement.style.backgroundColor = 'lightblue';
    } else {
        outputElement.style.backgroundColor = ''; // Restablecer el color de fondo
    }
});