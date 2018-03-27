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

  providers.forEach(function (prov) {
    if (prov.providerType === 'scrapper') {
      promises.push(scrapper(prov));
    } else if (prov.providerType === 'rest') {
      promises.push(restClient(prov));
    }
  });

  promises.forEach(function (pr, index) {
    Promise.resolve(pr).then(function (results) {
      promises.splice(index, 1);
      if (getSession(uuid)) {
        getSession(uuid).emit('results', results);
        if (promises.length === 1) getSession(uuid).emit('finished');
      }
    })
      .catch(function (error) {
        console.error(error);
        promises.splice(index, 1);
        if (getSession(uuid) && promises.length === 1) {
          getSession(uuid).emit('finished');
        }
      });
  });
};

module.exports = search;
