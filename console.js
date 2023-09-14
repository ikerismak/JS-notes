let sabor = "";
let contadoTiempo = "";
let ingresarPalomitas = false;
let sal = 0;
let aceite = 0;
let palomitas = 0;
let tiempoMaximo = 0;
let temperatura = "";
let comenzar = false;
let contador = 0;

let input = prompt("Desea igresar palomitas?: si/no");


let inputToLower =


let tapa = prompt("Tapa la sarten si/no: ")

if (tapa.toLocaleLowerCase() === "si") {
  let comenzar = true;
}

console.log("Encendiendo estufa a temperatura: " + temperatura);
console.log("");
console.log("Haciendo palomitas de " + sabor + "...");

while (contador <= tiempoMaximo && comenzar === true && input.toLocaleLowerCase() === "si") {
  if (contador > 3) {
    let tronando = prompt("Se escuchan tronando? si/no");

    if (tronando.toLocaleLowerCase() === "si") {
      console.log("1..");
      console.log("2..");
      console.log("3..");
      console.log("Agitando...");
    } else if (tronando.toLocaleLowerCase() === "no") {
      let listas = prompt("se quemaron? si/no");

      if (listas.toLocaleLowerCase() === "si") {
        let salida = "quemadas";
        console.log("Lo siento , tal vez debas de bajar la temperatura");
        comenzar = false;
      } else if (listas.toLocaleLowerCase() === "no") {
        let salida = "hechas";
        console.log("Disfruta tus palomitas");
        comenzar = false;
      }
    }
  }
}


if(contador === tiempoMaximo && salida === "quemadas"){

    console.log("Tal vez fue demasiado tiempo")

}

if(contador === tiempoMaximo && salida === "hechas"){

    console.log("Disfruta las palomitas")

}
