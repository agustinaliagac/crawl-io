/* TODO: NEEDS PHANTOM DRIVER */
var { plusURLEncoder } = require('../urlEncoders');

var falabella = function (config) {
  return {
    providerType: 'scrapper',
    providerData: {
      name: 'Falabella',
      image: 'https://vignette.wikia.nocookie.net/logopedia/images/5/5e/Falabella.png/revision/latest?cb=20170212144419',
      url: `https://www.falabella.com.ar/falabella-ar/search/?Ntt=${plusURLEncoder(config.searchTerm)}`,
      itemSelectors: {
        topSelector: '.fb-pod-group__item.fb-pod-group__item--product',
        title: '.fb-pod__product-title > a',
        price: '.fb-price-list.fb-pod__prices-wrapper .fb-price:first-child',
        link: '.fb-pod__product-title > a@href',
        thumbnail: 'img.fb-pod__media@src',
      },
      pagination: {
        selector: null,
        limit: 0,
      },
    },
  };
};

module.exports = falabella;
