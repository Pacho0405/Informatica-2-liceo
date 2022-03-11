function piso(nPisos,altura){
    let texto = "<p>"
    for(let i =0;i<altura-nPisos;i++){
        texto=texto+"&nbsp;";
    }
    for(let i=0;i<nPisos;i++){
        texto=texto+"#";
    }
    texto=texto+"</p>";
    return texto
}
let nPisos;
do{
altura=Number(prompt("ingrese el numero de pisos"))
}while(altura%1 !=0||altura>10||altura<=0||isNaN(altura))

let contenido="";

for(let i=1;i<=altura;i++){
    contenido=contenido+piso(i,altura)
}

let contenedor=document.querySelector("#contenedor");
contenedor.innerHTML= contenido;
