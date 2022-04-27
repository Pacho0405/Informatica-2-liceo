let denominador
let suma=0
i=1
for (let k = 0; k <=500; k++) {
denominador = 2*k+1;
suma=suma+(i/denominador)
i=i*-1
}
suma= suma*4
console.log("El calculo del numero es" + suma)
document.getElementById ("Respuesta").innerHTML= "El calculo del numero es " + suma