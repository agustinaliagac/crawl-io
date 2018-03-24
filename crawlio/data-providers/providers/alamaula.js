var alamaula = function(config) {
    return {
        providerType: 'scrapper',
        providerData: {
            name: 'AlaMaula',
            image: 'https://pulsosocial.com/wp-content/uploads/2011/12/alamaula-alta-resolucion-e1323201111244.png',
            url: `https://www.alamaula.com/s-${config.searchTerm}/v1q0p1`,
            itemSelectors: {
                topSelector: '.result.pictures',
                title: '.title a',
                price: '.amount',
                link: '.title a@href',
                thumbnail: '.thumb img@src',
            },
            pagination: {
                selector: '.pagination a.next.follows@href',
                limit: config.paginationLimit,
            }
        }
    };
};

module.exports = alamaula;
