var expect = require('chai').expect;
var scrapper = require('../src/search/scrapper');
var providers = require('../src/data-providers/');

describe('Scrapper', function() {
    var searchTerm = 'macbook';

    it('should return an array of results', async function() {
        expect(scrapper).to.be.a('function');
        var res = await scrapper(providers.alamaula(searchTerm));
        expect(res).to.be.an('object');
        expect(res).to.have.property('results').that.is.an('array').of.lengthOf.above(0);
    });

});
