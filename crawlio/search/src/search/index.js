var providerCreators = require('../../../data-providers');
var restClient = require('./restClient');
var scrapper = require('./scrapper');
var { getSession } = require('../sessions');

/* eslint-disable no-param-reassign */
var search = function (searchTerm, uuid) {
  var promises = [];

  var providers = (function createProviders() {
    return Object.keys(providerCreators).map(item => (
      providerCreators[item]({
        searchTerm,
        paginationLimit: 3,
      })
    ));
  }());

  searchTerm = encodeURI(searchTerm);

  providers.forEach(function (prov) {
    if (prov.providerType === 'scrapper') {
      promises.push(scrapper(prov));
    } else if (prov.providerType === 'rest') {
      promises.push(restClient(prov));
    }
  });

  promises.forEach(function (pr) {
    Promise.resolve(pr).then(function (results) {
      if (getSession(uuid)) getSession(uuid).emit('results', results);
    });
  });
};

module.exports = search;
