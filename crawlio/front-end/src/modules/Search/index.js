const INITIAL_STATE = {
  searchTerm: '',
};

const actionTypes = {
  UPDATE_SEARCH_TERM: 'best-price/Search/UPDATE_SEARCH_TERM',
};

const actionCreators = {
  updateSearchTerm: term => ({
    type: actionTypes.UPDATE_SEARCH_TERM,
    payload: term,
  }),
};

export {
  actionTypes as searchActionTypes,
  actionCreators as searchActionCreators,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};
