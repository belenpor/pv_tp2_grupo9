const capitalesPorPais = {
    "Argentina": ["Buenos Aires"],
    "Brasil": ["Brasilia"],
    "México": ["Ciudad de México"],
    "Chile": ["Santiago"]
};

const paisesSelect = document.getElementById("paises");
const capitalesSelect = document.getElementById("capitales");

function actualizarCapitales() {
    capitalesSelect.innerHTML = "";
    const paisSeleccionado = paisesSelect.value;
    const capitales = capitalesPorPais[paisSeleccionado];

    capitales.forEach(capital => {
        const opcion = document.createElement("option");
        opcion.value = capital;
        opcion.textContent = capital;
        capitalesSelect.appendChild(opcion);
    });
}

paisesSelect.addEventListener("change", actualizarCapitales);