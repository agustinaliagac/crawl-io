import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import { searchThunks } from '..';

class SearchContainer extends PureComponent {
  navigateTo = path => this.props.history.push(path);

  render() {
    const { searchTerm, thunks } = this.props;
    return (
      <Search
        searchTerm={searchTerm}
        newSearchTerm={thunks.newSearchTerm}
        navigateTo={this.navigateTo}
      />
    );
  }
}

SearchContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  thunks: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { searchTerm } = state.search;
  return {
    searchTerm,
  };
};

const mapDispatchToProps = dispatch => ({
  thunks: bindActionCreators(searchThunks, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
