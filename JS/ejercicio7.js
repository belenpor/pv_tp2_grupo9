
// 7. Declarar un array denominado nombres con al menos 6 nombres. 
// Obtener el nombre más largo del array nombres.  
// Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length) 
// que indica su tamaño. 

let nombres = ["Juan", "Maria", "Pedro", "Ana", "Luis" ];

let may;
for(let i=0; i<nombres.length;i++)
{
    if(i==0){
        may=nombres[i];
    }else{
        if(nombres[i].length>may.length){ 
            may=nombres[i];
        }
    }
}
console.log("El nombre más largo es: "+ may);
