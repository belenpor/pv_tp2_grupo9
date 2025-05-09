export function cambiarTexto() {
    const boton = document.getElementById('cambiarTexto');
    const parrafo = document.getElementById('texto');

    boton.addEventListener('click', () => {
        parrafo.textContent = '¡El texto ha cambiado con éxito!';
    });
}
