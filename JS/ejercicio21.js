// Seleccionar elementos
const inputElement = document.getElementById("input-text");
const outputElement = document.getElementById("output-text");

// Agregar un listener al evento 'input'
inputElement.addEventListener("input", () => {
    outputElement.textContent = inputElement.value;
});
