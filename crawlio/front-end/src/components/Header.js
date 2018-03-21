import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

import logo from '../assets/logo.svg';
import strings from '../strings';

const styles = {
  title: {
    fontSize: '1.5em',
    textAlign: 'center',
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
  }
};

const Header = (props) => {
  return(
    <header style={styles.header}>
      <h1 style={{ ...styles.title, color: props.muiTheme.palette.titleColor }}>{strings.searchHeaderTitle}</h1>
    </header>
  );
};

export default muiThemeable()(Header);
