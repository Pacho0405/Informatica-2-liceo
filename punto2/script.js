let imc = Number (prompt("ingrese su peso en Kg"))
if(imc< 18.5)
{
    console.log("insuficiencia ponderal")
}else{
    if(imc <= 24.9)
    {console.log("intervalo normal")
    }else{
        if(imc <=25)
        {console.log("sobrepeso")
        }else{
        if(imc <= 29.9)
        {console.log("preobesidad")
            }else{
             if(imc <=30)
             {console.log("obesidad")
                }else{
                if(imc <= 34.9 )
                {console.log("obesidad de clase 1")
                    }else{
                     if(imc <= 39.9)
                     {console.log("obesidad de clase 2")
                        }else{
                            if(imc >= 40)
                            {console.log("obesidad de clase 3")
                            }
                        }
                    }
                }    
             }   
        }   
    }
}
