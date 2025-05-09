
//Declarar variables 
//darle  valor a las variables
let  radio = "7,5";
radio = parseFloat(radio.replace(",", ".")); 
let area=Math.PI*Math.pow(radio,2);
console.log ("el area del circulo es: " +area.toFixed(2)+ " cm2");