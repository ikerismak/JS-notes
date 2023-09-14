const bigCard = document.querySelector("#image-form-container");
const formFromBigCard = document.querySelector("#patience-form");
const sendButton = document.querySelector("#send-button");
const cardsContainer = document.querySelector("#container-cards-row");
const alert = document.querySelector(".alert")
const badAlert = document.querySelector(".alert-danger")
const emptySpace = document.querySelector("message-container-empty")

let counterIdImage = 1;
let patiences = [];

function changesClases() {

    console.log("holas")
    alert.classList.add("visible")
    badAlert.classList.add("visibleBad")
}


const savePatiences = (event) => {

    event.preventDefault();


    try {

        let name = document.querySelector("#nombre");
        let email = document.querySelector("#correo");
        let mensaje = document.querySelector("#mensaje");

        name = name.value;
        email = email.value;
        mensaje = mensaje.value;

        if(name =! '' && email != '' && mensaje != ''){


            let patience = {
                id: new Date().getTime(),
                name: name,
                email: email,
                mensaje: mensaje,
              };

              patiences.push(patience);

              showPatient(patiences);
              alert.classList.remove("visible")
              badAlert.classList.add("visibleBad")
              setTimeout(changesClases,5000)

        }
        else{


            badAlert.classList.remove("visibleBad")
            alert.classList.add("visible")
            setTimeout(changesClases,5000)


        }



    } catch (error) {

    }





};

const showPatient = (patiences) => {

  cardsContainer.innerHTML = "";

  try {

    if (patiences.length != 0) {
        patiences.forEach((patient) => {
          console.log(patient);

          let name = patient.name;
          let email = patient.email;
          let mensaje = patient.mensaje;

          let card = document.createElement("div");
          let image = document.createElement("img");
          let infoCardCointainer = document.createElement("div");
          let infoName = document.createElement("h5");
          let infoMail = document.createElement("p");
          let infoTittleMesa = document.createElement("p");
          let infoMessage = document.createElement("p");
          let cardsColumn = document.createElement("div");

          image.src = ` ./assets/img/profile1.jpg`;

          cardsColumn.classList.add("col-lg-4", "col-md-6", "mb-4");
          cardsColumn.id = "card-column";
          card.classList.add("card");
          image.classList.add("card-img-top");
          infoCardCointainer.classList.add("card-body");
          infoName.classList.add("card-text");
          infoMail.classList.add("card-text");
          infoMessage.classList.add("card-text");
          infoTittleMesa.classList.add("card-text");

          infoName.textContent = ` Nombre: ${name}`;
          infoMail.textContent = ` Correo: ${email}`;
          infoTittleMesa.textContent = "Mensaje:";
          infoMessage.textContent = mensaje;

          infoCardCointainer.appendChild(infoName);
          infoCardCointainer.appendChild(infoMail);
          infoCardCointainer.appendChild(infoTittleMesa);
          infoCardCointainer.appendChild(infoMessage);

          card.appendChild(image);
          card.appendChild(infoCardCointainer);

          cardsColumn.appendChild(card);

          cardsContainer.appendChild(cardsColumn);
        });
      }

      else{
        console.log("the array is empty")
      }

  } catch (error) {

    console.log(error)

  }



  console.log(name);

  counterIdImage = counterIdImage + 1;

  formFromBigCard.reset();

  //   image.src = ` ./assets/img/profile${counterIdImage}.jpg`;
};

formFromBigCard.addEventListener("submit", savePatiences);

// Elementos: Los elementos son la unidad básica de estructura en HTML. Cada etiqueta HTML que abres y cierras, como <p> o <div>, se considera un elemento. Los elementos pueden contener contenido y otros elementos.

// Atributos: Los atributos son propiedades que se aplican a los elementos para proporcionar información adicional sobre ellos. Por ejemplo, el atributo src se usa en la etiqueta <img> para especificar la fuente de la imagen.

// Texto: Los nodos de texto contienen contenido de texto. Pueden estar dentro de elementos HTML y son lo que se muestra en la página. Por ejemplo, <p>Este es un nodo de texto</p>.

// Comentarios: Los comentarios en HTML son nodos especiales que no se muestran en la página web. Se utilizan para agregar notas o aclaraciones en el código fuente. Los comentarios se escriben entre <!-- y -->.

// Nodos de documento: El nodo de documento (Document) representa todo el documento HTML. Es el nodo raíz de la estructura del documento.

// Nodos de elemento: Los nodos de elemento (Element) representan elementos HTML individuales y forman parte de la estructura jerárquica del documento.

// Nodos de atributo: Los nodos de atributo (Attribute) representan los atributos de un elemento HTML. Cada atributo se considera un nodo individual.

// Nodos de texto: Los nodos de texto (Text) representan el contenido de texto dentro de un elemento HTML. Cada fragmento de texto se considera un nodo de texto separado.

// Nodos de comentario: Los nodos de comentario (Comment) representan los comentarios dentro del código HTML. Cada comentario se considera un nodo de comentario individual.
