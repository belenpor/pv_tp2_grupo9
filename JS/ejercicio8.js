//declarar variables
let numero1=5;
let numero2=10;
//declarar funcion
function calcularmayor(numero1, numero2) {
	if (numero1 > numero2) {
		return numero1;
	} else if (numero1 < numero2) {
		return numero2;
	} else {
		return "ambos numeros son iguales";
	}
}

// Mostrar resultados específicos
alert("El mayor entre 5 y 10 es: " + calcularmayor(5, 10));
alert("El mayor entre 7 y 20 es: " + calcularmayor(7, 20));
alert("El resultado entre 20 y 20 es: " + calcularmayor(20, 20));

// Mostrar resultado usando variables declaradas
let resultado = calcularmayor(numero1, numero2);
alert("El mayor es: " + resultado);