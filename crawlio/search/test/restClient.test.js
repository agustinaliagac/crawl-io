var expect = require('chai').expect;
var restClient = require('../src/search/restClient');
var providers = require('../src/data-providers/');

describe('RestClient', function() {
    var searchTerm = 'macbook';

    it('should return an array of results', async function() {
        expect(restClient).to.be.a('function');
        var res = await restClient(providers.mercadoLibre(searchTerm));
        expect(res).to.be.an('object');
        expect(res).to.have.property('results').that.is.an('array').of.lengthOf.above(0);
    });

});
