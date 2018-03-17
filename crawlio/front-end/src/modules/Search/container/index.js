import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Search from '../components/Search';
import { searchActionCreators } from '..';

/* eslint-disable react/forbid-prop-types */

class SearchContainer extends PureComponent {
  navigateTo = path => this.props.history.push(path);

  render() {
    const { searchTerm, actionCreators } = this.props;
    return (
      <Search
        searchTerm={searchTerm}
        updateSearchTerm={actionCreators.updateSearchTerm}
        navigateTo={this.navigateTo}
      />
    );
  }
}

SearchContainer.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  actionCreators: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { searchTerm } = state.search;
  return {
    searchTerm,
  };
};

const mapDispatchToProps = dispatch => ({
  actionCreators: bindActionCreators(searchActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
