nombres=["francisco","Sergio","juana","mariana","jose","juan daniel","daniela","Mateo","Samuel","Ana","jorge","Nicolas","Gabriela","Daniel","Jacobo","Tomas","Sofia"]
edades=[]
let suma= 0
for(let i=0;i<17;i++){
    do
    {
        edad=Number(prompt("ingrese la edad de  " + nombres[i]))
    }
    while( isNaN(edad) || edad<10 || edad>17)
    edades.push(edad)

}
for(let i=0; i<17; i++){
suma=suma+edades[i]
}
promedio=suma/17
let contenido=document.querySelector("#informacion")
informacion.innerHTML= "el Promedio de las notas es "+ promedio