var megatone = function(config) {
  return {
      providerType: 'scrapper',
      providerData: {
          name: 'Megatone',
          image: 'http://www.portaldemarcas.com/fotos/originales/logo9_marcas_345original.jpg',
          url: `https://www.megatone.net/busqueda/${config.searchTerm}/1864834/`,
          itemSelectors: {
              topSelector: '.itemMegatoneComun',
              title: '.tituloProductoMenu',
              price: '.f17.ls-1.B.cBlack.fLeft.mR10',
              link: 'a.pR.w100.h100.dIB@href',
              thumbnail: 'img.imagenListado@src',
          },
          pagination: {
              selector: null,
              limit: 0,
          }
      }
  };
};

module.exports = megatone;
