/**
 * @jest-environment jsdom
 */

/* eslint-disable no-console */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { shallow } from 'enzyme';
import Snackbar from 'material-ui/Snackbar';
import { Toolbar } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';

import SearchResults from '../SearchResults';
import SearchResultsItem from '../SearchResultsItem';
import providerCreators from '../../../../../../data-providers';
import searchResultsStyles from '../../container/searchResultsStyles';

test('Renders correctly', () => {
  const searchTerm = 'iPhone';
  const searchResults = [
    {
      title: 'iPhone 6',
      providerName: 'AlaMaula',
      price: '10000',
      link: 'https://google.com',
      thumbnail: 'https://ss7.vzw.com/is/image/VerizonWireless/iphone-x-kf-device-tab-d-3-retina?$pngalpha$&scl=1',
    },
    {
      title: 'iPhone 7',
      providerName: 'MercadoLibre',
      price: '12000',
      link: 'https://google.com',
      thumbnail: 'https://ss7.vzw.com/is/image/VerizonWireless/iphone-x-kf-device-tab-d-3-retina?$pngalpha$&scl=1',
    },
    {
      title: 'iPhone X',
      price: '30000',
      providerName: 'AlaMaula',
      link: 'https://google.com',
      thumbnail: 'https://ss7.vzw.com/is/image/VerizonWireless/iphone-x-kf-device-tab-d-3-retina?$pngalpha$&scl=1',
    },
  ];
  const providers = (function createProviders() {
    return Object.keys(providerCreators).map(item => providerCreators[item]({
      searchTerm,
    }));
  }());

  const styles = searchResultsStyles(getMuiTheme());
  const performSearch = () => {};

  const wrapper = shallow(<SearchResults
    searchResults={searchResults}
    performSearch={performSearch}
    searchTerm={searchTerm}
    providers={providers}
    newSearchTerm={() => {}}
    notificationOpen={false}
    notificationText=""
    handleHideNotification={() => {}}
    handleItemSelected={() => {}}
    navigateTo={() => {}}
    styles={styles}
  />);

  wrapper.setProps({
    providers,
  });
  expect(wrapper.find(SearchResultsItem).length).toEqual(searchResults.length);
  expect(wrapper.find(Snackbar).length).toEqual(1);
  expect(wrapper.find(Toolbar).length).toEqual(1);
  expect(wrapper.find(TextField).length).toEqual(1);
});
