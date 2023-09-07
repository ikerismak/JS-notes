// if: El condicional if se usa para ejecutar un bloque de código si una condición es verdadera.


// else if: El condicional else if se utiliza para comprobar múltiples condiciones en secuencia.

let edad = 15;

if (edad < 13) {
  console.log('Eres un niño');
} else if (edad >= 13 && edad < 18) {
  console.log('Eres un adolescente');
} else {
  console.log('Eres un adulto');
}


// Switch: El condicional switch se utiliza cuando necesitas tomar diferentes caminos en función del valor de una expresión.


let diaDeLaSemana = 'Lunes';

switch (diaDeLaSemana) {
  case 'Lunes':
    console.log('Es el primer día de la semana');
    break;
  case 'Martes':
    console.log('Es el segundo día de la semana');
    break;
  // ...otros casos...
  default:
    console.log('No es un día válido');
}
