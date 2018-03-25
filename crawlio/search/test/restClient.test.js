/* eslint-disable no-restricted-syntax, no-unused-expressions */

var { expect } = require('chai');
var restClient = require('../src/search/restClient');
var providers = require('../../data-providers');

describe('RestClient', function () {
  var searchTerm = 'macbook';

  it('should return an array of results', async function () {
    var res = await restClient(providers.mercadoLibre(searchTerm));
    expect(restClient).to.be.a('function');
    expect(res).to.be.an('object');
    expect(res).to.have.property('results').that.is.an('array').of.lengthOf.above(0);
  });
});
