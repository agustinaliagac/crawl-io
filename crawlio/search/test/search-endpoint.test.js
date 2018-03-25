/* eslint-disable no-restricted-syntax, no-unused-expressions */

var chai = require('chai');
var app = require('../index');
var chaiHttp = require('chai-http');

var { expect } = chai;

chai.use(chaiHttp);

describe('GET /api/search', () => {
  it('should return a correct result', (done) => {
    var searchTerm = 'camiseta';
    chai.request(app)
      .get(`/api/search?searchTerm=${searchTerm}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.searchTerm).to.be.a('string').and.to.be.eql(searchTerm);
        expect(res.body.uuid).to.be.a('string').of.length(36);
        done();
      });
  });

  it('should fail because we do not send a searchTerm parameter', (done) => {
    chai.request(app)
      .get('/api/search')
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
