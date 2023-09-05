// Hoisting de Variables:

// Las variables declaradas con var se elevan al inicio del ámbito, pero su asignación se mantiene en su lugar.

console.log(variableHoisted); // Muestra "undefined"
var variableHoisted = "Soy una variable hoisted";



// Hoisting de Funciones:

// Las funciones declaradas se elevan completamente, lo que significa que se pueden llamar antes de su declaración en el código.


hoistedFunction(); // Funciona incluso antes de la declaración
function hoistedFunction() {
  console.log("Función hoisted");
}
