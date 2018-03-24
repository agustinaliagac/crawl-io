import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PropTypes from 'prop-types';
import strings from '../strings';

/* eslint-disable react/forbid-prop-types */

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
  },
};

const Header = props => (
  <header style={styles.header}>
    <h1 style={{ ...styles.title, color: props.muiTheme.palette.textColor }}>
      {strings.searchHeaderTitle}
    </h1>
  </header>
);

Header.propTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default muiThemeable()(Header);
