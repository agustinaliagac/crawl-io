import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import PropTypes from 'prop-types';
import strings from '../../strings';
import headerStyles from './headerStyles';

const Header = ({ muiTheme }) => {
  const styles = headerStyles(muiTheme);
  return (
    <header style={styles.header}>
      <h1 style={styles}>
        {strings.searchHeaderTitle}
      </h1>
    </header>
  );
};

Header.propTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default muiThemeable()(Header);
