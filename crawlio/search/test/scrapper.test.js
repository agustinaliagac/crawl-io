/* eslint-disable no-restricted-syntax, no-unused-expressions */

var { expect } = require('chai');
var scrapper = require('../src/search/scrapper');
var providers = require('../../data-providers');

describe('Scrapper', function () {
  var searchTerm = 'macbook';

  it('should return an array of results', async function () {
    var res = await scrapper(providers.alamaula(searchTerm));
    expect(scrapper).to.be.a('function');
    expect(res).to.be.an('object');
    expect(res).to.have.property('results').that.is.an('array').of.lengthOf.above(0);
  });
});
