import io from 'socket.io-client';
import { http } from '../../api/Services';
import { networkActionCreators } from '../Network';

let resultsSocket;

const INITIAL_STATE = {
  searchResults: [],
  searchUUID: '',
};

const actionTypes = {
  APPEND_SEARCH_RESULTS: 'best-price/SearchResults/APPEND_SEARCH_RESULTS',
  UPDATE_SEARCH_UUID: 'best-price/SearchResults/UPDATE_SEARCH_UUID',
  START_SEARCHING: 'best-price/SearchResults/START_SEARCHING',
};

const actionCreators = {
  appendSearchResults: results => ({
    type: actionTypes.APPEND_SEARCH_RESULTS,
    payload: results,
  }),
  updateSearchUUID: uuid => ({
    type: actionTypes.UPDATE_SEARCH_UUID,
    payload: uuid,
  }),
  startSearching: () => ({
    type: actionTypes.START_SEARCHING,
  }),
};

const asynchronous = {
  searchTerm: term => (
    async (dispatch) => {
      dispatch(networkActionCreators.updateLoadingState(true));
      dispatch(actionCreators.startSearching());

      const response = await http.search(term);
      const { uuid } = response.data;

      dispatch(actionCreators.updateSearchUUID(uuid));
      dispatch(asynchronous.initializeWebSocket());
    }
  ),
  initializeWebSocket: () => (
    async (dispatch, getState) => {
      resultsSocket = io.connect(`${process.env.REACT_APP_WEBSOCKET_HOST}`, {
        query: {
          uuid: getState().results.searchUUID,
        },
      });
      resultsSocket.on('results', ({ results }) => {
        console.log('Received results! ', results);
        dispatch(actionCreators.appendSearchResults(results));
        dispatch(networkActionCreators.updateLoadingState(false));
      });
    }
  ),
};

export {
  actionTypes as searchResultsActionTypes,
  actionCreators as searchResultsActionCreators,
  asynchronous as searchResultsAsync,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.APPEND_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: [...state.searchResults, ...action.payload],
      };
    case actionTypes.UPDATE_SEARCH_UUID:
      return {
        ...state,
        searchUUID: action.payload,
      };
    case actionTypes.START_SEARCHING:
      return {
        ...state,
        searchResults: [],
      };
    default:
      return state;
  }
};
