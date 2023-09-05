// Variables:

// Una variable es un contenedor para almacenar datos en JavaScript.
// Se utilizan para guardar y manipular información en un programa.
// Declaración de Variables:

// En JavaScript, puedes declarar variables utilizando tres palabras clave: var, let y const.



// var:
// Declarar variables con var es la forma más antigua y menos recomendada.
// Las variables var tienen un alcance de función y pueden ser redeclaradas.

var edad = 25;
var nombre = "Juan";


// let:
// let se introdujo en ECMAScript 6 (ES6) y es la preferencia moderna para declarar variables.
// Las variables let tienen un alcance de bloque y no pueden ser redeclaradas en el mismo ámbito.

let edad = 30;
let nombre = "María";


// const:
// const también se introdujo en ES6 y se usa para declarar variables cuyos valores no cambian.
// Las variables const deben tener un valor asignado en el momento de la declaración y no pueden ser reasignadas.

const PI = 3.1416;
const nombre = "Carlos";

// Alcance de Variables:

// El alcance de una variable se refiere a dónde en el código una variable es accesible.
// Las variables declaradas con var tienen un alcance de función.
// Las variables declaradas con let y const tienen un alcance de bloque.


function ejemplo() {
    var variableFuncion = "Soy una variable de función";
    if (true) {
      let variableBloque = "Soy una variable de bloque";
      console.log(variableFuncion); // Acceso permitido
      console.log(variableBloque); // Acceso permitido
    }
    console.log(variableFuncion); // Acceso permitido
    console.log(variableBloque); // Error: variableBloque no está definida aquí
  }
