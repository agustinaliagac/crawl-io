const cardWidth = 250;
const cardHeight = 270;
const imageHeight = 140;

const searchResultsStyles = theme => ({
  paper: {
    height: cardHeight,
    width: cardWidth,
    margin: 15,
    overflow: 'hidden',
    textAlign: 'center',
  },
  thumbnail: {
    width: cardWidth,
    height: 'auto',
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: cardWidth,
    height: '100%',
  },
  imageWrapper: {
    height: imageHeight,
    overflow: 'hidden',
  },
  itemTitle: {
    marginTop: 15,
  },
  itemPrice: {
    fontSize: '1.9em',
    marginBottom: 10,
    color: theme.palette.accent1Color,
  },
  itemBottomWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  searchTextField: {
    width: '100%',
  },
  toolbar: {
    marginLeft: 30,
    color: theme.palette.textColor,
  },
  selectedFilterItem: {
    color: theme.palette.primary1Color,
  },
  itemProviderImage: {
    height: 40,
    width: 'auto',
    position: 'absolute',
    margin: 10,
  },
});

export default searchResultsStyles;
