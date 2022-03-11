function techo(){
    console.log("  _______/\\__")
    console.log("/______________\\")
    }
    function piso(){
    console.log("[    _   _    ]")
    console.log("[   [_] [_]   ]")
    console.log("[             ]")
    }
    function pisoBase(){
    console.log("[      _      ]")
    console.log("[     / \\     ]")
    console.log("[____/[_]\\____]")
    }
    function casa(nPisos){
        techo()
        for(let i = 0; i < nPisos; i++){
            piso()
        }
        pisoBase()
    }
    let nPisos = parseInt(prompt("Ingrese el numero de pisos"))
    casa(nPisos)