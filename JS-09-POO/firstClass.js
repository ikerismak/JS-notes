class Persona{


    nombre = "";
    apeelido = "" ;
    edad = 0;
    estadoCivil = "";
    rol = "";
    telefono = 0
    email  = 0


    constructor(nombre, apeelido){

        this.nombre = nombre
        this.apeelido = apeelido

    }


    saludar(){

        console.log("saludos ${}");
    }
}
