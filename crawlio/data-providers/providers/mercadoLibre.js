var mercadoLibre = function(config) {
    return {
        providerType: 'rest',
        providerData: {
            name: 'MercadoLibre',
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/20/MercadoLibre.svg/1200px-MercadoLibre.svg.png',
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
