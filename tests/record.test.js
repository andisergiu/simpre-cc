const request = require('supertest');
const app = require('../server'); // Ajustează calea dacă este necesar pentru a importa instanța app
const mongoose = require('mongoose');
const Record = require('../models/Record');

describe("Record API", () => {
  beforeAll(async () => {
    // Conectează la o bază de date de test
    await mongoose.connect(process.env.MONGO_URI_TEST, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    // Închide conexiunea la baza de date
    await mongoose.connection.close();
  });

  // Test pentru adăugarea unui pontaj
  it('should create a new record', async () => {
    const res = await request(app)
      .post('/api/records')
      .send({
        userId: '663bd52de7cfacd6aa971ce1',  // Asigură-te că acest ID este valid și există în DB de test
        timeIn: new Date(),
        timeOut: new Date()
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Record added successfully');
  });

  // Test pentru obținerea pontajelor unui utilizator
  it('should retrieve records for a user', async () => {
    const res = await request(app)
      .get('/api/records/663bd52de7cfacd6aa971ce1'); // Utilizează același ID ca în testul de creare
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
