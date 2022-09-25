const db = require("../_helpers/db");
const Pregunta = db.Pregunta;
const Categoria = db.Categorias;
const translate = require('translate-google')

const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

fetch(
  "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
)
  .then((response) => response.json())
  .then((data) =>
    data.results.map((pregunta) => {
      translate(pregunta, { from: 'en', to: 'es' }).then(res => {
        let opcionesEnIngles = pregunta.incorrect_answers;
        let opcionesEnespañol = res.incorrect_answers;
        let posicionDeSolucion = Math.floor(Math.random() * 4);
        opcionesEnIngles.splice(posicionDeSolucion, 0, pregunta.correct_answer)
        opcionesEnespañol.splice(posicionDeSolucion, 0, res.correct_answer)
        let categoria = Categorias.getAll()
        console.log(categoria)

        // res para el objeto en español y pregunta para el objeto en ingles
        let preguntaTransformada = {
          pregunta: { es: res.question, en: pregunta.question },
          opciones: { es: res.incorrect_answers, en: pregunta.incorrect_answers },
          categoria: { $oid: undefined },
          solucion: posicionDeSolucion
        }
        /*         let insertarPregunta = new Pregunta(preguntaTransformada)
                insertarPregunta.save() */
      })
    })
  )
