var Xray = require('x-ray');
var x = Xray();

var scrapper = function(provider) {
    var { topSelector, title, price, link, thumbnail } = provider.providerData.itemSelectors;
    var { selector } = provider.providerData.pagination;

    return x(provider.providerData.url, topSelector, [{
        title: title,
        price: price,
        link: link,
        thumbnail: thumbnail,
    }])
    .paginate(selector)
    .then(function(results) {
        results.forEach(item => {
          item.providerName = provider.providerData.name
        });

        return {
            results
        };
    });
};

module.exports = scrapper;
