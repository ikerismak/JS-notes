// class Alumno {
//   nota = 10;

//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   resultaDos(nota) {
//     if (nota > 6) {
//       console.log(
//         `Alumno ${this.nombre} con una nota de ${this.nota} esta aprobado`
//       );
//     } else {
//       console.log(`Alumno con una nota de ${this.nota} esta reprobado`);
//     }
//   }
// }

class Alumno {
  constructor(nombre,nota) {
    this.nombre = nombre;
    this.nota = nota
  }

  resultaDos(nota) {

    if (nota > 6) {
      console.log(
        `Alumno ${nombre} con una nota de ${nota} esta aprobado`
      );
    } else {
      console.log(`Alumno con una nota de ${nota} esta reprobado`);
    }
  }
}

let alumno1 = new Alumno("Iker",6);
let alumno2 = new Alumno("Pepe",8);
let alumno3 = new Alumno("Raul",6);

alumno1.resultaDos();
alumno2.resultaDos();
alumno3.resultaDos();
