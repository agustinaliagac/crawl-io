var { plusURLEncoder } = require('../urlEncoders');

var garbarino = function (config) {
  return {
    providerType: 'scrapper',
    providerData: {
      name: 'Garbarino',
      image: 'https://cdn.tecnogaming.com/wp-content/uploads/2017/04/garbarino-logo.jpg',
      url: `https://www.garbarino.com/q/${plusURLEncoder(config.searchTerm)}/srch?q=${plusURLEncoder(config.searchTerm)}`,
      itemSelectors: {
        topSelector: '.gb-list-cluster',
        title: '.gb-list-cluster-title',
        price: '.gb-list-cluster-prices-current',
        link: '.gb-list-cluster > a',
        thumbnail: '.gb-list-cluster-picture-inner > img@src',
      },
      pagination: {
        selector: null,
        limit: 0,
      },
    },
  };
};

module.exports = garbarino;
