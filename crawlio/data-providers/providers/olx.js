var { defaultURLEncoder } = require('../urlEncoders');

var olx = function (config) {
  return {
    providerType: 'scrapper',
    providerData: {
      name: 'OLX',
      image: 'https://downloads.andyroid.net/wp-content/uploads/2015/07/OLX-Brazil-Buy-and-Sell-icon.png',
      url: `https://www.olx.com.ar/nf/search/${defaultURLEncoder(config.searchTerm)}`,
      itemSelectors: {
        topSelector: '.item',
        title: '.items-info h3',
        price: '.items-price',
        link: '.item a@href',
        thumbnail: '.items-image img@src',
      },
      pagination: {
        selector: '.items-paginations-numbers.icons pagination-arrow icon-arrow-right@href',
        limit: config.paginationLimit,
      },
    },
  };
};

module.exports = olx;
