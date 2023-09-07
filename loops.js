// Bucle while: El bucle while se utiliza cuando no sabes cuántas veces se debe ejecutar el código, pero tienes una condición que debe cumplirse.


let contador = 0;

while (contador < 5) {
  console.log("Iteración " + contador);
  contador++;
}

// Bucle for: El bucle for se utiliza cuando sabes de antemano cuántas veces deseas que se ejecute el código. Tiene una estructura de control bastante precisa

for (let i = 0; i < 5; i++) {
    console.log("Iteración " + i);
  }

//   Bucle do...while: Similar al while, pero garantiza que el bloque de código se ejecute al menos una vez, ya que la comprobación de la condición se realiza después de la ejecución del bloque.


let contador2 = 0;

do {
  console.log("Iteración " + contador);
  contador++;
} while (contador < 5);


let contrasenaguardada = 123
let usuarioguardado = "iker"

function registrarUsuario(){

    intentos = 0

    let flag = true

    while(flag && intentos < 3){

        let user = prompt("ingresa usuario: ")
        let contra = prompt("ingresa contrasena: ")

        if(user == usuarioguardado && contra == contrasenaguardada){

            flag = false
        }


        intentos ++

    }



}


registrarUsuario()
