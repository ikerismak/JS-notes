function promedio(numeroUno,numeroDos,numeroTres){

    let average = (numeroUno + numeroDos + numeroTres) / 3

    if(average >= 6){

        console.log("aprobado")
    }else{

        console.log("reprobado")
    }

    return average


}



function sumar(a,b){

    let result = a + b;

    return result
}




function restar(a,b){
        let result = a-b
        return result

}
module.exports = {
    sumar,
    restar,
    promedio
}
