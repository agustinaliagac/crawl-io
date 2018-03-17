import React, { Component } from 'react';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import CircularProgress from 'material-ui/CircularProgress';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';

/* eslint-disable react/forbid-prop-types */

class SearchResults extends Component {
  performSearch = (searchTerm) => {
    const { performSearch } = this.props;
    performSearch(searchTerm);
  }

  renderItem = item => (
    <a key={item.link} target="_blank" href={item.link}>
      <GridTile
        key={item.thumbnail}
        title={item.title}
        subtitle={<span>$<b>{item.price}</b></span>}
        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
      >
        <img alt="Thumbnail" src={item.thumbnail} />
      </GridTile>
    </a>
  );

  renderSpinner = () => this.props.loading && <CircularProgress size={80} thickness={5} />;

  render() {
    const { searchResults } = this.props;
    return (
      <div className="App">
        <Header />
        { this.renderSpinner() }
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <GridList
            cellHeight={180}
            cols={3}
            style={{ width: '100%', height: '100%', overflowY: 'auto' }}
          >
            { searchResults.map(this.renderItem) }
          </GridList>
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
  performSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchResults;
