import providerCreators from '../../data-providers';

const INITIAL_STATE = {
  searchTerm: '',
  providers: [],
};

const actionTypes = {
  UPDATE_SEARCH_TERM: 'crawlio/Search/UPDATE_SEARCH_TERM',
  UPDATE_PROVIDERS: 'crawlio/Search/UPDATE_PROVIDERS',
};

const actionCreators = {
  updateSearchTerm: term => ({
    type: actionTypes.UPDATE_SEARCH_TERM,
    payload: term,
  }),
  updateProviders: providers => ({
    type: actionTypes.UPDATE_PROVIDERS,
    payload: providers,
  }),
};

const thunks = {
  newSearchTerm: searchTerm => (
    (dispatch) => {
      dispatch(actionCreators.updateSearchTerm(searchTerm));

      const providers = (function createProviders() {
        return Object.keys(providerCreators).map(item => providerCreators[item]({
          searchTerm,
        }));
      }());

      dispatch(actionCreators.updateProviders(providers));
    }
  ),
};

export {
  actionTypes as searchActionTypes,
  actionCreators as searchActionCreators,
  thunks as searchThunks,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case actionTypes.UPDATE_PROVIDERS:
      return {
        ...state,
        providers: action.payload,
      };
    default:
      return state;
  }
};
