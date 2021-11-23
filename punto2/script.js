let imc=Number(prompt("Ingrese su peso en kg"))
if(imc<18.5)
{
    console.log("tu peso es bajo")
}else{
    if(imc<25)
   {
    console.log("normal")
   }else{
       if(imc<30)
    {console.log("estás en preobesidad")
   }
         else{
             if(imc>30)
             console.log("estás obeso")
            }
}
}   