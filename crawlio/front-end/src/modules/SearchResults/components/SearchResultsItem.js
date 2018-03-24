import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { toObject } from '../../../utils';

/* eslint-disable react/forbid-prop-types */

const SearchResultsItem = ({ item, styles, providers }) => (
  <a key={item.link} target="_blank" href={item.link}>
    <Paper
      style={styles.paper}
      zDepth={2}
      rounded
    >
      <div style={styles.itemWrapper}>
        <img
          style={styles.itemProviderImage}
          alt={item.providerName}
          src={toObject(providers, 'providerData.name')[item.providerName].providerData.image}
        />
        <div style={styles.imageWrapper}>
          <img alt={item.title} style={styles.thumbnail} src={item.thumbnail} />
        </div>
        <div style={styles.itemBottomWrapper}>
          <span style={styles.itemTitle}>{item.title}</span>
          <span style={styles.itemPrice}>
            ${item.price}
          </span>
        </div>
      </div>
    </Paper>
  </a>
);

SearchResultsItem.propTypes = {
  item: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  providers: PropTypes.array.isRequired,
};

export default SearchResultsItem;
