var olx = function(config) {
    return {
        providerType: 'scrapper',
        providerData: {
            url: `https://www.olx.com.ar/nf/search/${config.searchTerm}`,
            itemSelectors: {
                topSelector: '.item.featuredad.highlighted',
                title: '.items-info h3',
                price: '.items-price',
                link: '.item a@href',
                thumbnail: '.items-image img@src',
            },
            pagination: {
                selector: '.items-paginations-numbers.icons pagination-arrow icon-arrow-right@href',
                limit: config.paginationLimit,
            }
        }
    };
};

module.exports = olx;