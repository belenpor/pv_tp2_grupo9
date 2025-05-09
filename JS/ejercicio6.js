/*  Crear un array denominado edades con al menos 8 edades distintas. Recorrer el array y obtener el promedio de las edades del array. */

const edades = [5, 10, 18, 22, 30, 35, 48, 53];
let sumaEdades = 0;

for (let i = 0; i < edades.length; i++) {
  sumaEdades += edades[i];
}

const promedio = sumaEdades / edades.length;
console.log("El promedio de las edades es: " + promedio);