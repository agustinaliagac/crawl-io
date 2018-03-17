var mercadoLibre = function(config) {
    return {
        providerType: 'rest',
        providerData: {
            url: `https://api.mercadolibre.com/sites/MLA/search?q=${config.searchTerm}`,
            payloadProperties: {
                items: 'results',
                title: 'title',
                price: 'price',
                link: 'permalink',
                thumbnail: 'thumbnail'
            }
        }
    };
};

module.exports = mercadoLibre;
