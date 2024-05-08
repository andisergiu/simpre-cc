const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Adjust path as necessary
const should = chai.should();

chai.use(chaiHttp);

describe('Time Records', () => {
    it('should create a time in record on /time-in POST', (done) => {
      chai.request(server)
        .post('/api/time-in')
        .send({'userId': 'someUserId'})
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('timeIn');
            done();
        });
    });
});