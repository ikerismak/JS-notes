let carrera = [

    {posicion: 1, nombre:"Roberto"},
    {posicion: 2, nombre:"Andrea"},
    {posicion: 3, nombre:"Jorge"},
    {posicion: 4, nombre:"Ramiro"},
    {posicion: 5, nombre:"Sofia"},

]


let resultado = carrera.map((corredor)=>{

    if(corredor.posicion === 1 ){

        corredor.adelanto = ["Roberto","Jorge"]

        corredor.nombre = "Ramiro"
    }
    else if(corredor.posicion === 2){

        corredor.adelanto = ["Roberto","Jorge"]

        corredor.nombre = "Jorge"
    }
    else if(corredor.posicion === 3){

        corredor.adelanto = ["Roberto","Jorge"]

        corredor.nombre = "Andrea"
    }
    else if(corredor.posicion === 4){

        corredor.nombre = "Sofia"
    }
    else if(corredor.posicion === 5){

        corredor.nombre = "Jose"
    }

    return corredor


})

console.log(resultado)
