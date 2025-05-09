import{Mdatos} from "./funcion19.js";

const boton = document.querySelector("#confirmar");
boton.addEventListener("click",Mdatos);

js19.funcion

export const Mdatos =() => {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const libreta = document.querySelector("#libreta").value;
    alert("Los datos ingresados son: \n"+"Nombre: "+nombre+"\n"+"Apellido: "+apellido+"\n"+"Libreta universitaria: "+libreta);
}
