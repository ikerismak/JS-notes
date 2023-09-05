// Alcance (Scope):

// El alcance se refiere a la accesibilidad y visibilidad de las variables en un programa de JavaScript.
// JavaScript tiene dos tipos principales de alcance: alcance global y alcance local (o función).

var globalVariable = "Soy una variable global";

function mostrarVariable() {
  console.log(globalVariable);
}

mostrarVariable(); // Muestra "Soy una variable global"

// Alcance Local (Función):

// Las variables declaradas dentro de una función tienen un alcance local y solo son accesibles dentro de esa función.

function mostrarLocalVariable() {
    var localVariable = "Soy una variable local";
    console.log(localVariable);
  }

  mostrarLocalVariable(); // Muestra "Soy una variable local"
  console.log(localVariable); // Error: localVariable no está definida fuera de la función


//   Funciones Nombradas:

//   Las funciones que tienen un nombre se llaman funciones nombradas y pueden ser llamadas por su nombre.

function sumar(a, b) {
    return a + b;
  }

  var resultado = sumar(2, 3);
  console.log(resultado); // Muestra 5

//   Funciones Anónimas:

//   Las funciones anónimas son funciones sin nombre y suelen utilizarse como argumentos en otras funciones o asignarse a variables.

var multiplicar = function(x, y) {
    return x * y;
  };

  var resultado = multiplicar(4, 5);
  console.log(resultado); // Muestra 20


//   Funciones de Flecha:

// Las funciones de flecha son una forma más concisa de escribir funciones anónimas y conservan el contexto léxico.


  var dividir = (a, b) => a / b;

var resultado = dividir(10, 2);
console.log(resultado); // Muestra 5
