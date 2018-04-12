var Xray = require('x-ray');
var sanitizePrice = require('./sanitizePrice');

var x = Xray();
var scrapper = function (provider) {
  var {
    topSelector,
    title,
    price,
    link,
    thumbnail,
  } = provider.providerData.itemSelectors;
  var { selector, limit } = provider.providerData.pagination;

  /* eslint-disable no-param-reassign */
  return x(provider.providerData.url, topSelector, [{
    title,
    price,
    link,
    thumbnail,
  }])
    .paginate(selector)
    .limit(limit || 4)
    .then(function (results) {
      results.forEach((item) => {
        item.providerName = provider.providerData.name;
        item.price = sanitizePrice(item.price) || '0';
      });

      return {
        providerName: provider.providerData.name,
        results,
      };
    });
};

module.exports = scrapper;
