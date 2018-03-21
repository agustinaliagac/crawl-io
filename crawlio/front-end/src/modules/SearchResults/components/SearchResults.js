import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import PropTypes from 'prop-types';

/* eslint-disable react/forbid-prop-types */

const styles = {
  paper: {
    height: 'auto',
    width: 300,
    margin: 5,
    overflow: 'hidden',
    textAlign: 'center',
  },
  thumbnail: {
    width: 300,
    height: 'auto'
  }
}

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxItemsShowing: 20
    };
  }
  performSearch = (searchTerm) => {
    const { performSearch } = this.props;
    performSearch(searchTerm);
  }

  renderItem = item => (
    <a key={item.link} target="_blank" href={item.link}>
      <Paper style={styles.paperStyle} 
        zDepth={2}
        rounded
        >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          width: 300
        }}>
          <img style={styles.thumbnail} src={item.thumbnail}/>
          <span>{item.title}</span>
        </div>
      </Paper>
    </a>
  );

  renderItems = searchResults => {
    let renderedResults = [];
    for(let i = 0; (i < this.state.maxItemsShowing && i < searchResults.length) ; i++) {
      renderedResults.push(this.renderItem(searchResults[i]));
    }
    return renderedResults;
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= (window.innerHeight * 1.5);
  }
  
  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }
  
  trackScrolling = () => {
    const wrappedElement = document.getElementById('root');
    if (this.isBottom(wrappedElement)) {
      this.setState({
        ...this.state,
        maxItemsShowing: this.state.maxItemsShowing + 20,
      })
    }
  };

  render() {
    const { searchResults } = this.props;
    return (
      <div className="App">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            this.renderItems(searchResults)
          }
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
