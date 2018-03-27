var { plusURLEncoder } = require('../urlEncoders');

var dafiti = function (config) {
  return {
    providerType: 'scrapper',
    providerData: {
      name: 'Dafiti',
      image: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/7c/7b/6f/7c7b6fa9-4f11-5688-2c5b-de22c3876bfa/mzl.pwgopetj.png/1200x630bb.jpg',
      url: `https://www.dafiti.com.ar/catalog/?q=${plusURLEncoder(config.searchTerm)}&submit=&o=header&baseUrl=`,
      itemSelectors: {
        topSelector: '.itm',
        title: 'p.itm-title',
        price: 'span.itm-price.special',
        link: 'a.itm-link@href',
        thumbnail: 'img.itm-img@data-src',
      },
      pagination: {
        selector: '#pagingNext@href',
        limit: config.paginationLimit,
      },
    },
  };
};

module.exports = dafiti;
