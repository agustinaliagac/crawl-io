const headerStyles = theme => ({
  title: {
    fontSize: '1.5em',
    textAlign: 'center',
    color: theme.palette.textColor,
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'column',
    display: 'flex',
    marginTop: 30,
    marginBottom: 30,
  },
  headerText: {
    fontSize: '1.3em',
    color: '#555',
  },
});

export default headerStyles;
