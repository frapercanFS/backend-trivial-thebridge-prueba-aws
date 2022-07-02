import request from 'supertest'

const db = require('../_helpers/db')
const Pregunta = db.Pregunta


describe('GET ../preguntas', () => {

    test("Respuesta: Status code 200", async () => {
        const jest = await request(Pregunta).get("/preguntas").send();
        expect(response.statusCode).toBe(200);
        // .toBe es un comando de jest que equivale a ==
    });
});
